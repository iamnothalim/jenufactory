const express = require("express");
const router = express.Router();
const pool = require('../../lib/mariadb');
const crypto = require('../../lib/crypto');

router.post('/',async function(req,res){
    console.log('register 백 들어왔다잉!');
    console.log(req.body);
    const password = crypto.hashed(req.body.password);
    try {
        const conn = await pool.getConnection();
        conn.query('insert into users (userId,password) values (?,?)',[req.body.userId, password]);
        console.log('디비 연결 됐다잉!');
        res.json({success:true,msg:"회원가입 완료!"});
    } catch (e) {
        console.log(e.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;