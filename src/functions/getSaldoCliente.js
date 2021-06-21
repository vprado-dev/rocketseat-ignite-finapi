exports.getSaldoCliente = (extratos) =>
  extratos.reduce((prev, curr) => prev + curr.valor, 0);
