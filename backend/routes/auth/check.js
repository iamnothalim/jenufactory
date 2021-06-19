const express = require("express");
const router = express.Router();
const pool = require('../../lib/mariadb');

router.get("/",async function(req,res){
    console.log("여긴 Check!!",req.user);
    if(!req.user){
        try {
            res.json({ id: null });
        } catch (e) {
            console.log(e.message);
            res.status(500).send("Server Error");
        }
    }else{
        const conn = await pool.getConnection();
        const idinfo = await conn.query('select * from users where id =?',[req.user.id]);
        // Redux state -> userData에 넣어줄 데이터 전송
        res.json(idinfo);
    }
})

module.exports = router;