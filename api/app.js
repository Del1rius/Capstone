require("dotenv").config()
const express = require("express")

const app = express()
const PORT = process.env.PORt || 4000

app.listen(PORT, ()=> {
    console.log(`Server is Live on ${PORT}`)
})