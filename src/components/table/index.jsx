import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'N° transação', width: 120 },
  { field: 'data', headerName: 'Data', width: 200 },
  { field: 'valor', headerName: 'Valor', width: 120 },
  { field: 'tipo', headerName: 'Tipo', width: 180 },
  { field: 'operador', headerName: 'Operador', width: 200 },
  { field: 'numero_conta', headerName: 'N° conta', width: 200 }
];

export default function DataTable({ transferencias }) {
  console.log(transferencias); // Verificar os dados recebidos

  const rows = transferencias.map((transferencia) => ({
    id: transferencia.id,
    data: transferencia.dataTransferencia,
    valor: transferencia.valor,
    tipo: transferencia.tipo,
    operador: transferencia.nomeOperadorTransacao,
    numero_conta: transferencia.userConta.idConta
  }));

  console.log(rows); // Verificar as linhas geradas

  return (
    <div style={{ height: 400, width: '100%', margin: '3% 0' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
}
