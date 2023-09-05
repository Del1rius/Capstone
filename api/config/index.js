require("dotenv").config();
const { createPool } = require("mysql");

const con = createPool({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.dbDatabase,
  multipleStatements: true,
  connectionLimit: 30,
});

module.exports = con;
