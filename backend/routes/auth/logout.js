const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
    console.log("여긴 로그아웃");
    res.cookie("access_token", "");
    res.send({ loginSuccess: false, user: null });
});

module.exports = router;