import React from 'react'
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
        <Button variant="outline-secondary" href='./Company'>Empresas</Button>
        <Button variant="outline-secondary" href='./User'>Usuários</Button>
    </>
  )
}

export default Home