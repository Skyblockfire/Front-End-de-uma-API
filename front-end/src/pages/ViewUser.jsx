import React from 'react'
import Button from 'react-bootstrap/Button';
import { IMaskInput } from 'react-imask';
import validarCpf from 'validar-cpf'
import { Link } from 'react-router-dom';
//import { useState } from "react";
//Eu amo coding.
const EditUser = ({user}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
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
                    disabled
                    onClick={(e)=>{e.target.value=""}}
                    />
                    <label className='form-label'>Usuário</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input 
                    type="text" 
                    className='form-control shadow-none' 
                    required
                    defaultValue='Franz' 
                    disabled
                    onClick={(e)=>{e.target.value=""}}
                    />
                    <label className='form-label'>Nome</label>
                </div>
                <div className='mb-3 form-floating'>
                    <IMaskInput
                     className='form-control shadow-none'
                     mask='000.000.000-00'
                     required 
                     onClick={(e)=>{e.target.value=""}}
                     defaultValue='795.003.930-26'
                     id='CPF'
                     onKeyUp={ValidarCPF}
                     disabled
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
                    onClick={(e)=>{e.target.value=""}}
                    disabled
                    />
                    <label className='form-label'>Telefone</label>
                </div>
                <span id='Situacao'>Situação Cadastral</span>
                <div className='mb-3'>
                <select className="form-select shadow-none" defaultValue="1" disabled required>
                    <option value="1">Ativo</option>
                    <option value="2">Inativo</option>
                    <option value="3">Pendente</option>
                </select>
                </div>

                <span id='Situacao'>Empresa</span>
                <div className='mb-3'>
                <select className="form-select shadow-none" disabled aria-label="Default select example">
                </select>
                </div>

            </div>
                <br />

                <Link to={`http://localhost:3000/User`} className='espaco'><Button variant="outline-dark">
            Voltar
        </Button>
        </Link>
         <Link to={`http://localhost:3000/User/Edit/1`}><Button variant="outline-dark">
            Editar
        </Button>
        </Link>
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