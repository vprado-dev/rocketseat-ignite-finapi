const { endpoint } = require("@ev-fns/endpoint");
const { v4: uuidv4 } = require("uuid");

const clientes = [];

exports.contasPostOne = endpoint(async (req, res) => {
  const { cpf, nome } = req.body;

  const id = uuidv4();

  clientes.push({
    cpf,
    nome,
    id,
  });
});
