import React from 'react'
import dadosUser from '../data/mockdata.json'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { useMemo, useState } from "react";

const User = () => {
  const data = useMemo(() => dadosUser, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Usuario",
      accessorKey: "usuario",
    },
    {
      header: "Nome",
      accessorKey: "nome",
    },
    {
      header: "Documento",
      accessorKey: "documento",
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
      cell: (
        <div>
            <Link to={`http://localhost:3000/User/View/1`}>
              <Button className='espaco' variant="outline-dark">Visualizar</Button>
            </Link>
            <Link to={`http://localhost:3000/User/Edit/1`}>
              <Button variant="outline-dark">Editar</Button>
            </Link>
        </div>
      ),
    },
  ];

  const [filtering, setFiltering] = useState("");

   const table = useReactTable({
    data,
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
    <div class="body">
            <h1>Usuários</h1>
            
        <input
          className="busca"
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder="Busca"
        />
        
        <div className='tabela'>
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
                  <td className="w-auto h-auto p-2" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    <Container>
        <Button className='espaco' variant="outline-dark" onClick={() => table.previousPage()}>Anterior</Button>
        <Button className='espaco' variant="outline-dark" onClick={() => table.nextPage()}>Próxima</Button>
       </Container>
    </div>
    
  )
}

export default User