import axios from "axios";

// Calcular saldo total por período
export const calcularSaldoTotalPorPeriodo = (formattedStartDate, formattedEndDate, setSaldoPeriodo) => {
axios
    .get(`http://localhost:8080/saldo/totalPeriodo?inicio=${formattedStartDate}&fim=${formattedEndDate}`)
    .then(response => {
    const saldoPeriodo = response.data;
    setSaldoPeriodo(saldoPeriodo);
    })
    .catch(error => {
    console.error('Erro ao calcular saldo total por período:', error);
    });
};

// Buscar transferências por período
export const buscarTransferenciasPorPeriodo = (inicio, fim,setTransferencias) => {
axios
    .get(`http://localhost:8080/transferencia/periodo?inicio=${inicio}&fim=${fim}`)
    .then(response => {
    const transferencias = response.data;
    setTransferencias(transferencias);
    })
    .catch(error => {
    console.error('Erro ao buscar transferências por período:', error);
    });
};

// Buscar transferências por conta
export const buscarTransferenciasPorConta = (accountId,setTransferencias) => {
    axios
      .get(`http://localhost:8080/transferencia/conta/${accountId}`)
      .then(response => {
        const transferencias = response.data;
        setTransferencias(transferencias);
      })
      .catch(error => {
        console.error('Erro ao buscar transferências por conta:', error);
      });
  };


  // Calcular saldo total por conta
 export const calcularSaldoTotalPorConta = (accountId,setSaldoTotal) => {
    axios
      .get(`http://localhost:8080/saldo/conta/${accountId}`)
      .then(response => {
        const saldo = response.data;
        setSaldoTotal(saldo);
      })
      .catch(error => {
        console.error('Erro ao buscar saldo total por conta:', error);
      });
  };

  // Buscar transferências por nome de operador
  export const buscarTransferenciasPorOperador = (operatorName,setTransferencias) => {
    axios
      .get(`http://localhost:8080/transferencia/operador?nomeOperador=${operatorName}`)
      .then(response => {
        const transferencias = response.data;
        setTransferencias(transferencias);
      })
      .catch(error => {
        console.error('Erro ao buscar transferências por nome de operador:', error);
      });
  };

  // Calcular saldo total por período e conta de um operador
  export const calcularSaldoTotalPorPeriodoEContaEOperador = (operatorName,setSaldoTotal) => {
    axios
      .get(`http://localhost:8080/saldo/totalPeriodoEContaOperador/${operatorName}`)
      .then(response => {
        const saldoTotal = response.data;
        setSaldoTotal(saldoTotal);
      })
      .catch(error => {
        console.error('Erro ao calcular saldo total por período e conta de um operador:', error);
      });
  };

  // Função para buscar o saldo total por período e conta ID
 export const buscarSaldoTotalPorPeriodoEConta = async (accountId, formattedStartDate, formattedEndDate,setSaldoPeriodo) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/saldo/totalPeriodoEConta?inicio=${formattedStartDate}&fim=${formattedEndDate}&idConta=${accountId}`
      );
      const saldoPeriodo = response.data;
      setSaldoPeriodo(saldoPeriodo);
    } catch (error) {
      console.error('Erro ao buscar saldo total por período e conta:', error);
    }
  };

  // Função para buscar as transferências por conta ID e período
 export const buscarTransferenciasPorContaEPeriodo = async (accountId, formattedStartDate, formattedEndDate,setTransferencias) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/transferencia/conta-periodo?idConta=${accountId}&inicio=${formattedStartDate}&fim=${formattedEndDate}`
      );
      const transferencias = response.data;
      setTransferencias(transferencias);
      // Se as datas não estiverem preenchidas, definir o saldo total
      if (!formattedStartDate && !formattedEndDate) {
        setSaldoTotal(transferencias.saldoTotal);
      }
    } catch (error) {
      console.error('Erro ao buscar transferências por conta e período:', error);
    }
  };