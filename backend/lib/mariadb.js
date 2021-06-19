const mariadb = require("mariadb");
const pool = mariadb.createPool({
    host:'193.123.240.70',
    port:3306,
    user:'jemerald',
    password:'1234',
    database:'jenufactory',
});
module.exports = pool;