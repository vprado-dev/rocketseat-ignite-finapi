const { endpoint } = require("@ev-fns/endpoint");
const { v4: uuidv4 } = require("uuid");
const { HttpError } = require("@ev-fns/errors");

const clientes = [];

exports.contasPostOne = endpoint((req, res) => {
  const { cpf, nome } = req.body;

  const clienteAlreadyExists = clientes.some((cliente) => cliente.cpf === cpf);

  if (clienteAlreadyExists) {
    throw new HttpError(400, "Cliente already exists!");
  }

  const id = uuidv4();

  clientes.push({
    cpf,
    nome,
    id: uuidv4(),
    statement: [],
  });

  res.status(201).end();
});
