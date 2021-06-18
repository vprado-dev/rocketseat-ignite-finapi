const { HttpError } = require("@ev-fns/errors");

exports.verificaContaId = (clientes, id_conta) => {
  const cliente = clientes.find((clienteObj) => clienteObj.id === id_conta);

  if (!cliente) {
    throw new HttpError(404, "cliente not found");
  }

  return { cliente };
};
