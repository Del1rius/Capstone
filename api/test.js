const errorHandling = require("./middleware/errorHandling")
const path = require("path")
const cookieParser = require("cookie-parser")
const cors =  require("cors")
const {routes} = require("./controllers")
const express = require('express');
const app = express()
const PORT = process.env.PORT || 4000

require("dotenv").config();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})

app.use(
    express.static("./static"),
    express.urlencoded({
        extended: false,
    }),     
    cookieParser(),
    cors(),
    routes,
    errorHandling
)


// app.use('/', require('./controllers/index'))

// app.get("/", (req, res) => {
//     try {
//         res.status(200)
//         res.send("TEST")
//     } catch (error) {
//         console.log(error.message)
//     }
// })
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./static/html/index.html"))
})

app.listen(PORT, () => {
    console.log(`Server is Live on ${PORT}`)
})


