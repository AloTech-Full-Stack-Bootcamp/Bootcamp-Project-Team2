//const {createPool} = require("mysql") //we are going to use only the createPool
const {createPool} = require("mysql")

const pool = createPool({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimits:10
})

module.exports = pool //with the help of pool, we can reuse the connections, we are keeping our connection in a pool, so whenever we make a request, we use that connection.
