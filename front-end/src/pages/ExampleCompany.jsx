import React from 'react'
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
//import { useState } from "react";
import { IMaskInput } from 'react-imask';
import ValidarCnpj from '../hooks/ValidarCnpj';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const EditCompany = ({company}) => {
    const { register,setValue } = useForm();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando formulário");
        Swal.fire({
            icon: "success",
            title: "A empresa foi editada!"
        })
        navigate("../Company");
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

    const ValidarCNPJ = (e) => {
        const cnpj = e.target.value.replace(/\D/g, '');
        console.log(cnpj)
        console.log(cnpj.length)
        if (cnpj.length === 14) {
          console.log(cnpj);
          const newcnpj = ValidarCnpj(cnpj)
          
          if (newcnpj) {
            
          } else {
            console.log("invalido")
            window.alert("CNPJ INVÁLIDO! Favor inserir um cnpj válido.")
            document.getElementById('cnpj').value=''
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
            confirmButtonText: "Sim!",
            cancelButtonText: "Não!",
            reverseButtons: false
          }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                title: "Deletado!",
                text: "Esta Empresa foi deletada.",
                icon: "success"
              })
              navigate(`../Company`);
              

            } 
          });
      }
    const VerificaCEP = (e) => {
        
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep)
        console.log(cep.length)
        if (cep.length === 8) {
          
          fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
              if (data.erro) {
              window.alert("CEP inválido!")
              document.getElementById('cep').value=''
              setValue('Rua', data.logradouro);
              setValue('Bairro', data.bairro);
              setValue('Cidade', data.localidade);
              setValue('Estado', "NN");
            } else {
              setValue('Rua', data.logradouro);
              setValue('Bairro', data.bairro);
              setValue('Cidade', data.localidade);
              setValue('Estado', data.uf);
            }
              
          });
        }
      }

      const mascaraMoeda = (e) => {
        const onlyDigits = e.target.value
          .split("")
          .filter((s) => /\d/.test(s))
          .join("")
          .padStart(3, "0");
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);
        e.target.value = maskCurrency(digitsFloat);
      };
    
      const maskCurrency = (valor, locale = "pt-BR", currency = "BRL") => {
        return new Intl.NumberFormat(locale, {
          style: "currency",
          currency,
        }).format(valor);
      };

    return(
    
    <>
        <h1>Informações Cadastrais:</h1>
        <div id="order-form-container" className="my-md-4 px-md-0 " class="teste">
        <form onSubmit={handleSubmit}>
            <div className='row mb-3'>
                <div className='mb-3 form-floating'>
                    <input type="text" className='form-control shadow-none' required defaultValue={'Overdrive Software e Consultoria'} minLength={5} maxLength={255} />
                    <label className='form-label'>Razão Social</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input type="text" className='form-control shadow-none' required defaultValue={'Overdrive'} minLength={5} maxLength={45}/>
                    <label className='form-label'>Nome Fantasia</label>
                </div>
                <div className='col-12 col-sm-6 mb-3 form-floating'>
                    <IMaskInput
                    mask="00.000.000/0000-00"
                    id='cnpj'
                    className='form-control shadow-none' 
                    onKeyUp={ValidarCNPJ}
                    defaultValue={'07.446.730/0001-60'}
                    required />
                    <label className='form-label' htmlFor="cnpj">CNPJ</label>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <IMaskInput
                    type='date'
                    className="form-control" 
                    defaultValue={'2024-04-15'}
                    required />
                    <label className="form-label">Data de abertura da empresa:</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input type="text" className='form-control shadow-none' required defaultValue={'Sociedade Simples Limitada'} maxLength={50} />
                    <label className='form-label'>Natureza Juridica</label>
                 </div>
                <div className='mb-3 form-floating'>
                <IMaskInput 
                    mask='0000-0'
                    type="text" 
                    className='form-control shadow-none' 
                    required
                    defaultValue={'1342-1'} />
                    <label className='form-label'>Atividade Econômica</label>
                </div>
                <div className='mb-3 form-floating'>
                <IMaskInput
                mask="00000-000"
                type="text"
                className="form-control shadow-none"
                id="cep"
                name="cep"
                placeholder="CEP"
                required
                onKeyUp={VerificaCEP}
                defaultValue={'35902-031'}
            />
                    <label className='form-label cep'>CEP</label>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <select
                    {...register("Estado")}
                     className="form-select shadow-none"
                     defaultValue="MG"
                     name='Estado'
                     disabled
                     required
                     data-input
                     >
            
                    <option>Estado</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                    </select>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <input {...register("Cidade")} type='text' className="form-control" name='Cidade' defaultValue={'Itabira'} required disabled/>
                    <label className="form-label">Cidade</label>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <input {...register("Bairro")} type='text' className="form-control" name='Bairro' defaultValue={'Gabiroba'} required disabled />
                    <label className="form-label">Bairro</label>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <input {...register("Complemento")} type='text' className="form-control" name='Complemento' />
                    <label className="form-label">Complemento (Opcional)</label>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <input {...register("Rua")} type='text' className="form-control" name='Rua' defaultValue={'Rua dos Locutores'} required disabled />
                    <label className="form-label" htmlFor='Rua'>Rua</label>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <input type='number' className="form-control" name='Numero' defaultValue={"479"} required />
                    <label className="form-label">Número</label>
                </div>
                <div className='mb-3 form-floating'>
                    <IMaskInput 
                    className='form-control shadow-none' 
                    required
                    defaultValue='(85) 3467-9517'
                    mask='(00) 0000-0000'
                    onKeyUp={handlePhone} 
                    onClick={(e)=>{e.target.value=""}}
                    />
                    <label className='form-label'>Telefone</label>
                </div>
                <div className='mb-3 form-floating'>
                    <IMaskInput onInput={mascaraMoeda} className='form-control shadow-none' name='Capital' defaultValue={'R$ 4.000.000,00'} required />
                    <label className='form-label'>Capital</label>
                </div>
                <span id='Situacao'>Situação Cadastral</span>
                <div className='mb-3'>
                <select className="form-select shadow-none" defaultValue="1" required>
                    <option value="1">Ativo</option>
                    <option value="2">Inativo</option>
                    <option value="3">Pendente</option>
                </select>
                </div>

            </div>
            
            <br />

        <Button variant="outline-dark" className='espaco' type="submit" onSubmit={handleSubmit}>
            Salvar
        </Button>
        <Button variant="outline-dark" onClick={handleDelete}>
            Excluir
        </Button>
        </form>
        </div>
    </>
    
 )

}

export default EditCompany