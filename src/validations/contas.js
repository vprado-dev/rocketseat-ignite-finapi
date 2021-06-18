const Joi = require("joi");

exports.contasPostOneBody = Joi.object()
  .keys({
    cpf: Joi.string()
      .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
      .required(),
    nome: Joi.string().required(),
  })
  .required();
