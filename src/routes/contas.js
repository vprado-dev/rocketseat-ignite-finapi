const { body, params } = require("@ev-fns/validation");
const Router = require("express");
const {
  contasPostOneBody,
  contasGetOneExtratosGetManyParams,
  depositoPostOneBody,
  contasGetOneParam,
} = require("../validations/contas");
const {
  contasPostOne,
  contasGetMany,
  contasGetOneExtratosGetMany,
  depositoPostOne,
  contasGetOne,
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

module.exports = router;
