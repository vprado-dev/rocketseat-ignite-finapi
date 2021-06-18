const { body, params } = require("@ev-fns/validation");
const Router = require("express");
const {
  contasPostOneBody,
  contasGetOneExtratosGetManyParams,
} = require("../validations/contas");
const {
  contasPostOne,
  contasGetMany,
  contasGetOneExtratosGetMany,
} = require("../endpoints/contas");

const router = Router();

router.get("/contas", contasGetMany);

router.post("/conta", body(contasPostOneBody), contasPostOne);

router.get(
  "/extratos/:id_conta",
  params(contasGetOneExtratosGetManyParams),
  contasGetOneExtratosGetMany,
);

module.exports = router;
