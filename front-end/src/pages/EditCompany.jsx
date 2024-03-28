import React from 'react'
//import Form from 'react-bootstrap/Form'; Será utilizado no futuro com o react / Bootstrap
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const EditCompany = ({company}) => {
    //Remover o console.log assim que possível
    console.log("Os dados e inputs do formulário estão sem máscara no momento e por isso estão sem CSS, para salvar tempo para a apresentação de hoje. Amanhã já estarão com BOOTSTRAP REACT e com as validações individuais");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando form");
    console.log(CNPJ, SitCadastral, Data, RazaoSocial,NomeFantasia,CNAE,Endereco,Contato,Capital);
    }
    
    //Sobre o endereço, será melhor consumir da API do VIACEP, realizar a criação dos campos para a utilização assim que for realizar a verificação individual dos campos.
    const [CNPJ, setCNPJ] = useState("");
    const [SitCadastral, setSitCadastral] = useState("");
    const [Data, setData] = useState("");
    const [RazaoSocial, setRazaoSocial] = useState("");
    const [NomeFantasia, setNomeFantasia] = useState("");
    const [CNAE, setCNAE] = useState("");
    const [Endereco, setEndereco] = useState("");
    const [Contato, setContato] = useState("");
    const [Capital, setCapital] = useState("");
    
    //Verificação, se os campos vieram vazios então serão preenchidos com vazio(evita os warnings e os errors)
    if(company == null){
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
        <form>
            <span>CNPJ:</span>
            <input 
                type="number" 
                name='CNPJ'
                placeholder='Digite o CNPJ da empresa'
                onChange={(e) => {setCNPJ(e.target.value)}}
                value={CNPJ}
            />
            <span>Situação Cadastral:</span>
            <input 
            /*Alterar a situação cadastral para opções em options em select */
                type="text" 
                name='SitCadastral'
                placeholder='Digite a Situação Cadastral da empresa'
                onChange={(e) => {setSitCadastral(e.target.value)}}
                value={SitCadastral}
            />

            <span>Data:</span>
            <input 
                type="number" 
                name='Data'
                placeholder='Digite a data de abertura empresa'
                onChange={(e) => {setData(e.target.value)}}
                value={Data}
            />
            <span>Razao Social:</span>
             <input 
                type="text" 
                name='RazaoSocial'
                placeholder='Digite a Razão Social da empresa'
                onChange={(e) => {setRazaoSocial(e.target.value)}}
                value={RazaoSocial}
            />
            <span>Nome fantasia: </span>
            <input 
                type="text" 
                name='NomeFantasia'
                placeholder='Digite o Nome Fantasia da empresa'
                onChange={(e) => {setNomeFantasia(e.target.value)}}
                value={NomeFantasia}
            />
            
            <span>Endereco: </span>
            {/*Utilizar do VIACEP futuramente, para o endereço*/}
            <input 
                type="text" 
                name='Endereco'
                placeholder='Digite o Endereço da empresa por completo'
                onChange={(e) => {setEndereco(e.target.value)}}
                value={Endereco}
            />
            <span>Contato: </span>
            <input 
                type="number" 
                name='Contato'
                placeholder='Digite o telefone/celular da empresa'
                onChange={(e) => {setContato(e.target.value)}}
                value={Contato}
            />
            <span>Contato: </span>
            <input 
                type="number" 
                name='Capital'
                placeholder='Digite o capital da empresa'
                onChange={(e) => {setCapital(e.target.value)}}
                value={Capital}
            />

      <Button variant="primary" type="submit" onSubmit={handleSubmit}>
            Salvar
        </Button>
        </form>
    </>
    
 )

}

export default EditCompany