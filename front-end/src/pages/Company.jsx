import React from 'react'
import dados from '../data/MOCK_DATA.json';
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

  
const Company = () => {
  const data = useMemo(() => dados, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "nome",
      accessorKey: "nome",
    },
    {
      header: "CNPJ",
      accessorKey: "CNPJ",
    },
    {
      header: "Telefone",
      accessorKey: "telefone",
    },
    {
      header: "Capital",
      accessorKey: "capital",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: 'Ações',
      cell: (
        <div>
            <Link to={`http://localhost:3000/Company/View/1`}>
              <Button className='espaco' variant="outline-dark">Visualizar</Button>
            </Link>
            <Link to={`http://localhost:3000/Company/Edit/1`}>
              <Button variant="outline-dark">Editar</Button>
            </Link>
        </div>
      ),
    },
  ]
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
    <div className='body plano-de-fundo'>
        <h1 className='titulo'>Empresas</h1>
        
       <input
          className="busca distancia"
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder="Busca"
          
        />
        <Link to={`http://localhost:3000/Company/Edit`}><Button variant="light" className='botao'>
            Criar
        </Button></Link>
        <div className='tabela tabela-comp'>
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

export default Company