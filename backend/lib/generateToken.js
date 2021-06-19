const jwt = require("jsonwebtoken");

exports.generateToken = function(idinfo){
    console.log('generateToken: ',idinfo);
    const token = jwt.sign(
        //첫번째 파라미터에는 토큰안에 집어넣고 싶은 데이터를 넣는다.
        {
            id:idinfo.id,
        },
        'jemerald', //두번째 파리미터에는 JWT 암호
        {
            expiresIn:"7d", //7일 동안만
        }
    );
    return token;
};