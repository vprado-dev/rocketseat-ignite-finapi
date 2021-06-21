const { body, params, query } = require("@ev-fns/validation");
const Router = require("express");
const {
  contasPostOneBody,
  contasGetOneExtratosGetManyParams,
  depositoPostOneBody,
  contasGetOneParam,
  contasPatchOneBody,
  saquePostOneBody,
  contasGetOneExtratosGetOneParams,
} = require("../validations/contas");
const {
  contasPostOne,
  contasGetMany,
  contasGetOneExtratosGetMany,
  contasGetOne,
  contasPatchOne,
  depositoPostOne,
  saquePostOne,
  contasGetOneExtratosGetOne,
  contasDeleteOne,
} = require("../endpoints/contas");

const router = Router();

router.get("/contas", contasGetMany);

router.post("/conta", body(contasPostOneBody), contasPostOne);

router.get("/conta/:cpf", params(contasGetOneParam), contasGetOne);

router.get(
  "/extratos/:id_conta",
  params(contasGetOneExtratosGetManyParams),
  contasGetOneExtratosGetMany,
);

router.post("/deposito", body(depositoPostOneBody), depositoPostOne);

router.post("/saque", body(saquePostOneBody), saquePostOne);

router.get(
  "/extrato/data",
  query(contasGetOneExtratosGetOneParams),
  contasGetOneExtratosGetOne,
);

router.patch(
  "/conta/:id_conta",
  params(contasGetOneExtratosGetManyParams),
  body(contasPatchOneBody),
  contasPatchOne,
);

router.delete(
  "/conta/:id_conta",
  params(contasGetOneExtratosGetManyParams),
  contasDeleteOne,
);

module.exports = router;
