const crypto = require('crypto');

const secret = 'jemerald';

exports.hashed = function(password){
    return crypto.createHmac('sha256',secret).update(password).digest('hex');
}