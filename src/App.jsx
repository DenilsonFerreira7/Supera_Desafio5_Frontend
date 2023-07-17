import React, { useState } from 'react';
import { Button, CssBaseline, TextField, Typography } from '@mui/material';
import '../src/App.css';
import DataTable from './components/table';
import { format } from 'date-fns';
import {
  buscarSaldoTotalPorPeriodoEConta,
  buscarTransferenciasPorConta,
  buscarTransferenciasPorContaEPeriodo,
  buscarTransferenciasPorOperador,
  buscarTransferenciasPorPeriodo,
  calcularSaldoTotalPorConta,
  calcularSaldoTotalPorPeriodo,
  calcularSaldoTotalPorPeriodoEOperador,
  buscarTransferenciasPorPeriodoEOperador,
  calcularSaldoTotalPorNomeOperador,
} from './api';

function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [operatorName, setOperatorName] = useState('');
  const [accountId, setAccountId] = useState('');
  const [saldoTotal, setSaldoTotal] = useState('');
  const [saldoPeriodo, setSaldoPeriodo] = useState('');
  const [transferencias, setTransferencias] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'yyyy-MM-dd');
  };

  const handleSearch = async () => {
    try {
      if (accountId && startDate) {
        await buscarTransferenciasPorContaEPeriodo(accountId, startDate, endDate, setTransferencias);
        await buscarSaldoTotalPorPeriodoEConta(accountId, startDate, endDate, setSaldoPeriodo);
        setSaldoTotal('');
      } else if (operatorName && startDate && endDate) {
        await buscarTransferenciasPorPeriodoEOperador(startDate, endDate, operatorName, setTransferencias);
        await calcularSaldoTotalPorPeriodoEOperador(startDate, endDate, operatorName, setSaldoPeriodo);
        setSaldoTotal('');
      } else if (accountId) {
        await buscarTransferenciasPorConta(accountId, setTransferencias);
        await calcularSaldoTotalPorConta(accountId, setSaldoTotal);
        setSaldoPeriodo('');
      } else if (startDate && endDate) {
        await buscarTransferenciasPorPeriodo(startDate, endDate, setTransferencias);
        await calcularSaldoTotalPorPeriodo(startDate, endDate, setSaldoPeriodo);
        setSaldoTotal('');
      } else if (operatorName) {
        await buscarTransferenciasPorOperador(operatorName, setTransferencias);
        await calcularSaldoTotalPorNomeOperador(operatorName, setSaldoTotal);
        setSaldoPeriodo('');
      }
    } catch (error) {
      console.error('Erro ao realizar a pesquisa:', error);
    }
  };

  return (
    <div className='container'>
      <CssBaseline />
      <div className='container_limit'>
        <div className='container_input'>
          <TextField
            id='start-date'
            label='Data de início'
            type='date'
            variant='outlined'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id='end-date'
            label='Data de fim'
            type='date'
            variant='outlined'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id='operator-name'
            label='Nome do operador'
            variant='outlined'
            value={operatorName}
            onChange={(e) => setOperatorName(e.target.value)}
          />
          <TextField
            id='account-id'
            label='Número da conta'
            variant='outlined'
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
          />
        </div>
        <Button variant='contained' sx={{ alignSelf: 'flex-end' }} onClick={handleSearch}>
          Pesquisar
        </Button>
        <div className='get_saldo'>
          {startDate && endDate ? (
            <Typography sx={{ marginRight: '10%' }}>Saldo no período: {saldoPeriodo}</Typography>
          ) : (
            <Typography sx={{ marginRight: '10%' }}>Saldo total: {saldoTotal}</Typography>
          )}
        </div>
        <DataTable transferencias={transferencias} />
      </div>
    </div>
  );
}

export default App;
