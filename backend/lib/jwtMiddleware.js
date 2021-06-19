const jwt = require("jsonwebtoken");
const pool = require("mariadb");

const jwtMiddleware = async (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token) return next(); //토큰 없음
    try {
        const decoded = jwt.verify(token,"jemerald");
        console.log('이게 토큰',token);
        console.log('이게 디코디드',decoded);
        req.user = {
            id : decoded.id,
        };
        //토큰 남은 유효기간이 3일 미만이면 재발급
        const now = Math.floor(Date.now()/1000);
        if(decoded.exp - now < 60*60*24*3){
            const conn = await pool.getConnection();
            const idinfo = await conn.query('select * from users where id =?',[decoded.id]);
            const token = gt.generateToken(idinfo[0]);
            res.cookie("access_token",token,{
                maxAge: 1000*60*60*24*7, //7일
                httpOnly: true,
            });
        }
        return next();
    } catch (e) {
        console.log(e.message);
        return next(); //토큰 검증 실패
    }
};

module.exports = jwtMiddleware;