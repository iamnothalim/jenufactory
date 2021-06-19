const express = require("express");
const router = express.Router();
const pool = require('../../lib/mariadb');
const crypto = require('../../lib/crypto');
const gt = require('../../lib/generateToken');

router.post('/',async function(req,res){
    console.log('login 백 들어왔다잉!');
    console.log(req.body);
    const password = crypto.hashed(req.body.password);
    try {
        const conn = await pool.getConnection();
        const idinfo = await conn.query('select * from users where userId =?',[req.body.userId]);
        if(idinfo[0]==undefined){
            res.json({msg:"존재하지 않은 아이디입니다."});
        }else{
            if(idinfo[0].password !== password){
                res.json({msg:"비밀번호가 틀렸습니다."})
            }else{
                const token = gt.generateToken(idinfo[0]);
                console.log(token);
                res.cookie("access_token",token,{
                    maxAge: 1000*60*60*24*7, //7일
                    httpOnly: true,
                })
                .json({loginSuccess: true, user:req.body.userId});
            }
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;