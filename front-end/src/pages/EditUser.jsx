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
    
    if(user !== undefined){
        setNome("");
        setCPF("");
        setRG("");
        setTelefone("");
        setUsuario("");
        setStatus("");
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
        <span>Nome:</span>
             <input 
                type="text" 
                name='Nome'
                placeholder='Digite o seu nome'
                onChange={(e) => {setNome(e.target.value)}}
                value={Nome}
            />
            </label>

            <br />

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

            <br />

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

            <br />

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

            <br />

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

            <br />

            <label>
            <span>Situacao:</span>
             <select name="Status" onChange={(e) => {setStatus(e.target.value)}} value={Status}>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
                <option value="Pendente">Pendente</option>
             </select>
            </label>

            <br />

        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
            Salvar
        </Button>
    </form>
    </>
 
 )
}

export default EditUser