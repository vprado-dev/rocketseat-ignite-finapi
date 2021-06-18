const { HttpError } = require("@ev-fns/errors");

exports.verificaContaCpf = (clientes, cpf) => {
  const cliente = clientes.find((clienteObj) => clienteObj.cpf === cpf);

  if (!cliente) {
    throw new HttpError(404, "cliente not found");
  }

  return { cliente };
};
