const { body } = require("@ev-fns/validation");
const Router = require("express");
const { contasPostOneBody } = require("../validations/contas");
const { contasPostOne } = require("../endpoints/contas");
const router = Router();

module.exports = router.post("/conta", body(contasPostOneBody), contasPostOne);
