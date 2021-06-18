const { body, params } = require("@ev-fns/validation");
const Router = require("express");
const { contasPostOneBody } = require("../validations/contas");
const { contasGetMany, contasPostOne } = require("../endpoints/contas");

const router = Router();

router.get("/contas", contasGetMany);

router.post("/conta", body(contasPostOneBody), contasPostOne);

module.exports = router;
