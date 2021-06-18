const { body } = require("@ev-fns/validation");
const Router = require("express");
const { accountPostOneBody } = require("../validations/accounts");
const { accountPostOne } = require("../endpoints/accounts");
const router = Router();

module.exports = router.post(
  "/account",
  body(accountPostOneBody),
  accountPostOne,
);
