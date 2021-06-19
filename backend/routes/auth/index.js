const express = require("express");
const router = express.Router();
const check = require("./check");
const register = require("./register");
const login = require("./login");
const logout = require("./logout");

router.use("/check",check);
router.use("/register",register);
router.use("/login",login);
router.use("/logout",logout);

module.exports = router;