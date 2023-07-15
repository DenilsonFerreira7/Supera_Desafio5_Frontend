import { Button, CssBaseline, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import "../src/App.css"
import DataTable from './components/table';
import axios from 'axios';

function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [operatorName, setOperatorName] = useState('');
  const [accountId, setAccountId] = useState('');
  const [saldoTotal, setSaldoTotal] = useState('0');
  const [saldoPeriodo, setSaldoPeriodo] = useState('0');
  const [transferencias, setTransferencias] = useState([]);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };
////////////////////// LOGICA DE REQUISIÇÕES //////////////////////////////


  const handleSearch = () => {
    // Lógica para realizar a pesquisa com os valores dos inputs
    console.log('Pesquisar:', startDate, endDate, operatorName, accountId);

    // Chamada para buscar o saldo total da conta
    axios.get(`http://localhost:8080/saldo/conta/${accountId}`)
      .then(response => {
        const saldo = response.data;
        setSaldoTotal(saldo);
      })
      .catch(error => {
        console.error('Erro ao buscar saldo:', error);
      });



      

// Chamada para buscar as transferências por ID da conta
axios.get(`http://localhost:8080/transferencia/conta/${accountId}`)
.then(response => {
  const transferencias = response.data;
  setTransferencias(transferencias);
})
.catch(error => {
  console.error('Erro ao buscar transferências por conta:', error);
});





  };

  return (
    <div className='container'>
      <CssBaseline/>
      <div className='container_limit'>
        <div className='container_input'>
          <TextField
            id="start-date"
            label="Data de início"
            type="date"
            variant="outlined"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="end-date"
            label="Data de fim"
            type="date"
            variant="outlined"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="operator-name"
            label="Nome do operador"
            variant="outlined"
            value={operatorName}
            onChange={(e) => setOperatorName(e.target.value)}
          />
          <TextField
            id="account-id"
            label="Número da conta"
            variant="outlined"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
          />
        </div>
        <Button variant="contained" sx={{ alignSelf: "flex-end" }} onClick={handleSearch}>
          Pesquisar
        </Button>
        <div className='get_saldo'>
          <Typography sx={{marginRight: "10%"}}>Saldo total: {saldoTotal}</Typography>
          <Typography>Saldo no período: {saldoPeriodo}</Typography>
        </div>
        <DataTable transferencias={transferencias} />
      </div>
    </div>
  );
}

export default App;
