import React from 'react';
import Button from 'react-bootstrap/Button';
import { IMaskInput } from 'react-imask';
import validarCpf from 'validar-cpf';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import UserService from '../services/UserService';
import CompanyService from '../services/CompanyService';

const EditUser = () => {

  const [empresas, setEmpresas] = useState([]);
  const [user, setUser] = useState(null);
  const { id } = useParams();
  
  const { register, watch, setValue, handleSubmit } = useForm();

  const status = watch("status");

  useEffect(() => {
    
    CompanyService.listarStatus(1).then((response) =>{ 
      setEmpresas(response.data);
    });

    

    if(id){
      UserService.listarPorId(id)
        .then((response) => {
          const userData = response.data;
          setUser(userData);
          console.log(userData)
          setValue("nome", userData.nome);
          setValue("username", userData.userName);
          setValue("CPF", userData.cpf);
          setValue("telefone", userData.telefone);
          setValue("status", userData.status);

          if(userData.status === 1){
            setValue("empresaId", userData.empresaId || "");
          } else {
            setValue("empresaId", "");
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar o usuário:", error);
        });
    }
  }, [id,setUser]);

  const onSubmit = async (data) => {
    console.log(data)
      data.CPF = data.CPF.replace(/\D/g, "");
      data.status = parseInt(data.status);
      data.id = id;
     if(data.status !== 1){
        data.empresaId = null;
     }
      try{
        await UserService.atualizar(data)

      Swal.fire({
          icon: "success",
          title: "O usuário foi editado!"
      })
      navigate("../User"); 
  } catch(error){
    const errorMessage =
      error.message || "Erro inesperado ao cadastrar o usuário.";
    Swal.fire({
      title: "Erro",
      html: errorMessage,
      icon: "error",
    });
  }
};
        const ValidarCPF = (e) => {
          const cpf = e.target.value.replace(/\D/g, '');
          if (cpf.length === 11) {
      
            console.log(cpf);
            const newcpf = validarCpf(cpf)
          
            if (newcpf) {
            } else {
              window.alert("CPF invalido!")
              document.getElementById('CPF').value=''
            }
        }
      }
      const navigate = useNavigate();

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success espaco",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
    
      const handleDelete = (id) =>{
        
        swalWithBootstrapButtons.fire({
            title: "Tem certeza?",
            text: "Essa ação pode ser irreversível!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            reverseButtons: false
          }).then((result) => {
            if (result.isConfirmed) {
              console.log(id)
                UserService.deletar(id).then(
                swalWithBootstrapButtons.fire({
                title: "Deletado!",
                text: "Este usuário foi deletado.",
                icon: "success",
                showConfirmButton: false,
                  timer: 2000
              })
            ).catch((error) => {
                console.error("Erro ao deletar colaborador:", error)
                Swal.fire({
                  title: "Parece que algo deu errado",
                  text: "Não foi possível deletar o colaborador.",
                  icon: "error",
                  showConfirmButton: false,
                  timer: 2000
                })
              })
              navigate(`../User`);
            
            } 
          });
      }

      const handlePhone = (e) => {
        let input = e.target;
        input.value = phoneMask(input.value);
      };

    const phoneMask = (value) => {
        if (!value) return "";
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        return value;
      };    

  return ( 
    <div class="body">
        <h1>Informações Cadastrais:</h1>
        <div id="order-form-container" className="my-md-4 px-md-0" class='teste'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row mb-3'>
                <div className='mb-3 form-floating'>
                    <input 
                    type="text" 
                    className='form-control shadow-none' 
                    required
                    placeholder=''
                    minLength={5}
                    maxLength={45}
                    {...register("username")}
                    />
                    <label className='form-label'>Usuário</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input 
                    type="text" 
                    className='form-control shadow-none' 
                    required
                    placeholder=''
                    minLength={5}
                    maxLength={255}
                    {...register("nome")}
                    />
                    <label className='form-label'>Nome</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input
                     className='form-control shadow-none'
                     mask='000.000.000-00'
                     required 
                     onClick={(e)=>{e.target.value=""}}
                     defaultValue='000.000.000-00'
                     id='CPF'
                     onKeyUp={ValidarCPF}
                     {...register("CPF")}
                     />
                    <label className='form-label'>CPF</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input 
                    className='form-control shadow-none' 
                    required
                    defaultValue='(00) 0000-0000'
                    mask='(00) 0000-0000'
                    onKeyUp={handlePhone} 
                    onClick={(e)=>{e.target.value=""}}
                    {...register("telefone")}
                    />
                    <label className='form-label'>Telefone</label>
                </div>
                <span id='Situacao'>Situação Cadastral</span>
                <div className='mb-3'>
                <select {...register("status")} className="form-select shadow-none" aria-label="Default select example" >
                <option value="0">Inativo</option>
                <option value="1">Ativo</option>
                <option value="2">Pendente</option>
                </select>
                </div>
                
                {status == 1 && (
                   <span id='Situacao'>Empresa
                <div className='mb-3'>
                <select className="form-select shadow-none" aria-label="Default select example" {...register("empresaId")} required>
                {empresas.map((empresa) => (
                <option key={empresa.id} value={empresa.id}>
                {empresa.nomeFantasia}
                </option>
                ))}
              </select>
              </div>
              </span>
          )}
                </div>

          
                <br />

        <Button className='espaco' variant="outline-dark" type="submit" onSubmit={handleSubmit}>
            Salvar
        </Button>
        <Button variant="outline-dark" onClick={() => handleDelete(id)}>
            Excluir
        </Button>
        </form>
        </div>
    
    </div>
 
 )
}

export default EditUser