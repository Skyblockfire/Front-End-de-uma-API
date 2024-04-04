import React from 'react'
//import { useForm } from "react-hook-form";
//import Form from 'react-bootstrap/Form'; //Será utilizado no futuro com o react / Bootstrap
import Button from 'react-bootstrap/Button';
import { useState } from "react";


const EditCompany = ({company}) => {
    //Remover o console.log assim que possível
    //console.log("Os dados e inputs do formulário estão sem máscara no momento e por isso estão sem CSS, para salvar tempo para a apresentação de hoje. Amanhã já estarão com BOOTSTRAP REACT e com as validações individuais");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando formulário");
        console.log(CNPJ, SitCadastral, Data, RazaoSocial,NomeFantasia,CNAE,Endereco,Contato,Capital);
    }

    //Sobre o endereço, será melhor consumir da API do VIACEP, realizar a criação dos campos para a utilização assim que for realizar a verificação individual dos campos.
    const [CNPJ, setCNPJ] = useState("");
    const [SitCadastral, setSitCadastral] = useState("");
    const [Data, setData] = useState("");
    const [RazaoSocial, setRazaoSocial] = useState("");
    const [NomeFantasia, setNomeFantasia] = useState("");
    const [CNAE, setCNAE] = useState("");
    //Endereço será formado por: CEP,Rua,Bairro
    const [Endereco, setEndereco] = useState("");
    const [Contato, setContato] = useState("");
    const [Capital, setCapital] = useState("");
    
    //Substituir verificação
    if(company !== undefined){
    setCNPJ("");
    setSitCadastral("");
    setData("");
    setRazaoSocial("");
    setNomeFantasia("");
    setCNAE("");
    setEndereco("");
    setContato("");
    setCapital("");
    }

    return(
    
    <>
        <h1>Informações Cadastrais:</h1>
        <div id="order-form-container" className="my-md-4 px-md-0 " class="teste">
        <form onSubmit={handleSubmit}>
            <div className='row mb-3'>
                <div className='mb-3 form-floating'>
                    <input type="text" className='form-control shadow-none' required />
                    <label className='form-label'>Razão Social</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input type="text" className='form-control shadow-none' required />
                    <label className='form-label'>Nome Fantasia</label>
                </div>
                <div className='col-12 col-sm-6 mb-3 form-floating'>
                    <input type="number" className='form-control shadow-none' required />
                    <label className='form-label'>CNPJ</label>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <input type='date' className="form-control" placeholder="dd/mm/yyyy" defaultValue="2000-01-01" required />
                    <label className="form-label">Data de abertura da empresa:</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input type="text" className='form-control shadow-none' required />
                    <label className='form-label'>Situação Cadastral</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input type="text" className='form-control shadow-none' required />
                    <label className='form-label'>Atividade Econômica</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input type="text" className='form-control shadow-none' required />
                    <label className='form-label'>CEP</label>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <select
              
                     className="form-select shadow-none"
                     defaultValue="Estado"
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
                    <input type='text' className="form-control" required disabled/>
                    <label className="form-label">Cidade</label>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <input type='text' className="form-control" required disabled />
                    <label className="form-label">Bairro</label>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <input type='text' className="form-control" />
                    <label className="form-label">Complemento (Opcional)</label>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <input type='text' className="form-control" required disabled />
                    <label className="form-label">Rua</label>
                </div>
                <div className="col-12 col-sm-6 mb-3 form-floating">
                    <input type='number' className="form-control" required />
                    <label className="form-label">Número</label>
                </div>
                <div className='mb-3 form-floating'>
                    <input type="number" className='form-control shadow-none' required />
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

           {/* <label>
            <span>CNPJ:</span>
            <input 
                type="number" 
                name='CNPJ'
                placeholder='Digite o CNPJ da empresa'
                onChange={(e) => {setCNPJ(e.target.value)}}
                value={CNPJ}
                autoFocus
            />
            </label>

            <br />

            <label>
            <span>Situação Cadastral:</span>
            <input 
            Alterar a situação cadastral para opções em options em select
                type="text" 
                name='SitCadastral'
                placeholder='Digite a Situação Cadastral da empresa'
                onChange={(e) => {setSitCadastral(e.target.value)}}
                value={SitCadastral}
            />
            </label>

            <br />

            <label>
            <span>Data:</span>
            <input 
                type="number" 
                name='Data'
                placeholder='Digite a data de abertura empresa'
                onChange={(e) => {setData(e.target.value)}}
                value={Data}
            />
            </label>

            <br />

            <label>
            <span>Razao Social:</span>
             <input 
                type="text" 
                name='RazaoSocial'
                placeholder='Digite a Razão Social da empresa'
                onChange={(e) => {setRazaoSocial(e.target.value)}}
                value={RazaoSocial}
            />
            </label>

            <br />

            <label>
            <span>Nome fantasia: </span>
            <input 
                type="text" 
                name='NomeFantasia'
                placeholder='Digite o Nome Fantasia da empresa'
                onChange={(e) => {setNomeFantasia(e.target.value)}}
                value={NomeFantasia}
            />
            </label>

            <br />

            <label>
            <span>CNAE  </span>
            <input 
                type="text" 
                name='CNAE'
                placeholder='Digite o CNAE da empresa'
                onChange={(e) => {setCNAE(e.target.value)}}
                value={CNAE}
            />
            </label>

            <br />
            
            <label>
            <span>Endereco: </span>
            
            <input 
                type="text" 
                name='Endereco'
                placeholder='Digite o Endereço da empresa por completo'
                onChange={(e) => {setEndereco(e.target.value)}}
                value={Endereco}
            />
            </label>

            <br />
            
            <label>
            <span>Contato: </span>
            <input 
                type="number" 
                name='Contato'
                placeholder='Digite o telefone/celular da empresa'
                onChange={(e) => {setContato(e.target.value)}}
                value={Contato}
            />
            </label>

            <br />

            <label>
            <span>Capital: </span>
            <input 
                type="number" 
                name='Capital'
                placeholder='Digite o capital da empresa'
                onChange={(e) => {setCapital(e.target.value)}}
                value={Capital}
            />
            </label>*/}
            
            <br />

        <Button variant="primary" type="submit">
            Salvar
        </Button>
        
        </form>
        </div>
    </>
    
 )

}

export default EditCompany