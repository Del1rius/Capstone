require("dotenv").config()
const {createPool} = require("mysql")

const connection = createPool({
    host: process.env.dbHost,
    database: process.env.dbDatabase,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    port: process.env.dbPort,
    multipleStatements: true,
    connectionLimit: 30
})

module.exports = connection
