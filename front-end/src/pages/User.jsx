import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import UserService from '../services/UserService';
import Swal from 'sweetalert2';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { useEffect, useMemo, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

    useEffect(() => {
      UserService.listarTabela()
        .then((response) => {
          console.log(response)
          setUsers(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar usuários:", error);
          Swal.fire({
            title: "Erro",
            text: "Não foi possível carregar os usuários",
            icon: "error",
          });
        });
    }, []);

  const columns = useMemo(
    () => [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Usuario",
      accessorKey: "userName",
    },
    {
      header: "Nome",
      accessorKey: "nome",
    },
    {
      header: "Documento",
      accessorKey: "cpf",
    },
    {
      header: "Telefone",
      accessorKey: "telefone",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: 'Ações',
      cell: ({ row }) => (
        <div>
          {/*  <Link to={`http://localhost:3000/User/View`}>
              <Button className='espaco' variant="outline-dark">Visualizar</Button>
            </Link>*/}
            <Link to={`http://localhost:3000/User/Edit/${row.original.id}`}>
              <Button variant="outline-dark">Editar</Button>
            </Link>
        </div>
      ),
    },
  ], []);

  const [filtering, setFiltering] = useState("");

   const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div class="body plano-de-fundo">
            <h1 className='titulo'>Usuários</h1>
            
        <input
          className="busca distancia"
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder="Busca"
        />
        <Link to={`http://localhost:3000/User/Create`}><Button variant="light" className='botao' >
            Criar
        </Button></Link>
        <div className='tabela tabela-user'>
        <table className="table table-hover table-bordered">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                  data-th={cell.column.id}
                  className="w-auto h-auto p-2"
                  key={cell.id}
                >
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    <Container>
        <Button className='espaco' variant="light" onClick={() => table.previousPage()}>Anterior</Button>
        <Button className='espaco sumir' variant="light" disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Próxima</Button>
       </Container>
    </div>
    
  )
}

export default User