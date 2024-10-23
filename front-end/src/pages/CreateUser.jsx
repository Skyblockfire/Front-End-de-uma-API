import React from 'react'
import Button from 'react-bootstrap/Button';
import { IMaskInput } from 'react-imask';
import validarCpf from 'validar-cpf'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import UserService from '../services/UserService';
//TODO: Refazer as máscaras (Não utilizar de IMASK pois buga os registros no register, faze-los manualmente)
//TODO: Fazer validações com yup resolver
const CreateUser = () => {
  const [empresas, setEmpresas] = useState([]);

  const { register , handleSubmit } = useForm();

    const onSubmit = async (data) => {
      console.log(data)
        data.CPF = data.CPF.replace(/\D/g, "");
        data.EmpresaId = null;
        data.status = parseInt(data.status);

        try{
          await UserService.salvar(data)

        Swal.fire({
            icon: "success",
            title: "O usuário foi cadastrado!"
        })
        navigate("../User");
        console.log("Enviando formulário")
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row mb-3'>
                <div className='mb-3 form-floating'>
                    <input 
                    type="text" 
                    className='form-control shadow-none' 
                    required
                    {...register("UserName")}
                    />
                    <label className='form-label'>Usuário</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input 
                    type="text" 
                    className='form-control shadow-none' 
                    required
                    {...register("Nome")}
                    />
                    <label className='form-label'>Nome</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input
                     className='form-control shadow-none'
                     mask='000.000.000-00'
                     required 
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
                    onKeyUp={handlePhone}
                    {...register("Telefone")} 
                    />
                    <label className='form-label'>Telefone</label>
                </div>
                <span id='Situacao'>Situação Cadastral</span>
                <div className='mb-3'>
                <select className="form-select shadow-none" aria-label="Default select example" {...register("status")}>
                <option value="2">Pendente</option>
                </select>
                </div>
                
                </div>
                <br />

        <Button variant="outline-dark" className='espaco' type='submit' onSubmit={handleSubmit}>
            Enviar
        </Button>
        </form>
        </div>    
    </div>
 
 )
}

export default CreateUser