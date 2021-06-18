const Joi = require("joi");

exports.contasPostOneBody = Joi.object().keys({
  cpf: Joi.string().required(),
  nome: Joi.string().required(),
});
