const Joi = require("joi");

exports.contasPostOneBody = Joi.object()
  .keys({
    cpf: Joi.string()
      .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
      .required(),
    nome: Joi.string().required(),
  })
  .required();

exports.contasGetOneExtratosGetManyParams = Joi.object()
  .keys({
    id_conta: Joi.string().required(),
  })
  .required();

exports.contasGetOneExtratosGetOneParams = Joi.object()
  .keys({
    id_conta: Joi.string().required(),
    data: Joi.string().required(),
  })
  .required();
exports.depositoPostOneBody = Joi.object()
  .keys({
    descricao: Joi.string().required(),
    valor: Joi.number().required(),
  })
  .required();

exports.contasGetOneParam = Joi.object()
  .keys({
    cpf: Joi.string()
      .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
      .required(),
  })
  .required();

exports.saquePostOneBody = Joi.object().keys({
  descricao: Joi.string().required(),
  valor: Joi.number().required(),
});
