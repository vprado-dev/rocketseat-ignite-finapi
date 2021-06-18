const { endpoint } = require("@ev-fns/endpoint");

exports.accountPostOne = endpoint(async (req, res) => {
  const { cpf, name } = req.body;
  res.status(200).json({ cpf, name });
});
