import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const EditUser = ({user}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Enviando formulário")
        console.log(Nome,CPF,RG,Telefone,Usuario,Status)
    }

    const [Nome, setNome] = useState("");
    const [CPF, setCPF] = useState("");
    const [RG, setRG] = useState("");
    const [Telefone, setTelefone] = useState("");
    const [Usuario, setUsuario] = useState("");
    const [Status, setStatus] = useState("");
    
    if(user === ""|| user == null){
        setNome("");
        setCPF("");
        setRG("");
        setTelefone("");
        setUsuario("");
        setStatus("");
    }

  return (
    <>
    <form >
        <span>Nome:</span>
             <input 
                type="text" 
                name='Nome'
                placeholder='Digite o seu nome'
                onChange={(e) => {setNome(e.target.value)}}
                value={Nome}
            />
            <label>
            <span>CPF:</span>
                <input
                    type="number"
                    name='CPF'
                    placeholder='Digite o seu CPF'
                    onChange={(e) => {setCPF(e.target.value)}}
                    value={CPF}
                />
            </label>
            <label>
            <span>RG:</span>
                <input
                    type="number"
                    name='RG'
                    placeholder='Digite o seu RG'
                    onChange={(e) => {setRG(e.target.value)}}
                    value={RG}
                />
            </label>
             <label>
             <span>Telefone:</span>
                <input
                    type="number"
                    name='Telefone'
                    placeholder='Digite o seu telefone'
                    onChange={(e) => {setTelefone(e.target.value)}}
                    value={Telefone}
                />
            </label>
            <label >
                <span>Usuario:</span>
                 <input
                    type="text"
                    name='Usuario'
                    placeholder='Digite o seu nome de Usuário'
                    onChange={(e) => {setUsuario(e.target.value)}}
                    value={Usuario}
                />
            </label>
            <label>
            <span>Situacao:</span>
             <select name="Status" onChange={(e) => {setStatus(e.target.value)}} value={Status}>
                <option value="Ativo"></option>
                <option value="Inativo"></option>
                <option value="Pendente"></option>
             </select>
            </label>
        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
            Salvar
        </Button>
    </form>
    </>
 
 )
}

export default EditUser