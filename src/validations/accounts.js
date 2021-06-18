const Joi = require("joi");

exports.accountPostOneBody = Joi.object().keys({
  cpf: Joi.string().required(),
  name: Joi.string().required(),
});
