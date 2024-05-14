import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CompanyImage from '../images/company.png'
import UserImage from '../images/user.png'
const Home = () => {
  return (
    <div className='body teste home'>
        <Link to='http://localhost:3000/Company'><img src={CompanyImage} alt="Imagem de uma Empresa" className='Image'/></Link>
        <Link to='http://localhost:3000/User'><img src={UserImage} alt="Imagem de um usuário" className='Image'/></Link>
        <br />
        <Button variant="outline-dark" className='espaco-home' href='./Company'>Empresas</Button>
        <Button variant="outline-dark" href='./User'>Usuários</Button>
    </div>
  )
}

export default Home