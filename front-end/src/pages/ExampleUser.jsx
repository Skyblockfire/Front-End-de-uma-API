import React from 'react'
import Button from 'react-bootstrap/Button';
import { IMaskInput } from 'react-imask';
import validarCpf from 'validar-cpf'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import data from '../data/MOCK_DATA.json'
//import { useState } from "react";
//Eu amo coding.
const EditUser = ({user}) => {
  const [empresas, setEmpresas] = useState([]);
  
  useEffect(() => {
    setEmpresas(data);
  }, []);
  
  const { register, watch } = useForm();


    const handleSubmit = (event) => {
        event.preventDefault()
        Swal.fire({
            icon: "success",
            title: "O usuário foi editado!"
        })
        navigate("../User");
        console.log("Enviando formulário")
    }
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
    
      const handleDelete = (e) =>{
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
                
                swalWithBootstrapButtons.fire({
                title: "Deletado!",
                text: "Este usuário foi deletado.",
                icon: "success"
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
        <div id="order-form-container" className="my-md-4 px-md-0 " class="teste">
        <form onSubmit={handleSubmit}>
            <div className='row mb-3'>
                <div className='mb-3 form-floating'>
                    <input 
                    type="text" 
                    className='form-control shadow-none' 
                    required
                    defaultValue='Darthe'
                    />
                    <label className='form-label'>Usuário</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input 
                    type="text" 
                    className='form-control shadow-none' 
                    required
                    defaultValue='Franz' 
                    />
                    <label className='form-label'>Nome</label>
                </div>
                <div className='mb-3 form-floating'>
                    <IMaskInput
                     className='form-control shadow-none'
                     mask='000.000.000-00'
                     required 
                     defaultValue='795.003.930-26'
                     id='CPF'
                     onKeyUp={ValidarCPF}
                     />
                    <label className='form-label'>CPF</label>
                </div>
                <div className='mb-3 form-floating'>
                    <IMaskInput 
                    className='form-control shadow-none' 
                    required
                    defaultValue='(19) 1523-4231'
                    mask='(00) 0000-0000'
                    onKeyUp={handlePhone} 
                    />
                    <label className='form-label'>Telefone</label>
                </div>
                <span id='Situacao'>Situação Cadastral</span>
                <div className='mb-3'>
                <select className="form-select shadow-none" aria-label="Default select example" {...register("status")}>
                <option value="1">Ativo</option>
                <option value="2">Inativo</option>
                <option value="3">Pendente</option>
                </select>
                </div>
                
                {watch("status") === "1" && (
                   <span id='Situacao'>Empresa
                <div className='mb-3'>
                <select className="form-select shadow-none" aria-label="Default select example" {...register("empresaId")}>
                {empresas.map((empresa) => (
                <option key={empresa.id} value={empresa.id}>
                {empresa.nome}
                </option>
                ))}
              </select>
              </div>
              </span>
          )}
                </div>
                <br />

        <Button variant="outline-dark" className='espaco' type='submit' onSubmit={handleSubmit}>
            Salvar
        </Button>
        
        <Button variant="outline-dark" onClick={handleDelete}>
            Excluir
        </Button>
        </form>
        </div>
        {/*
        Se sobrar tempo fazer:

        <div className='mb-3 form-floating'>
                    <input type="number" 
                    className='form-control shadow-none' 
                    required />
                    <label className='form-label'>RG</label>
                </div>
        */}
    
    </div>
 
 )
}

export default EditUser