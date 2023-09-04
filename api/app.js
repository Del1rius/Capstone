require("dotenv").config()
// // const { express, routes } = require("./controllers/index")
// const {express, routes} = require('express')
const errorHandling = require("./middleware/errorHandling")
const path = require("path")
const cookieParser = require("cookie-parser")
const cors =  require("cors")
const {express, routes} = require("./controllers")
const app = express()
const PORT = process.env.PORT || 4000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Request-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    res.header("Access-Control-Expose-Headers", "Authorization")
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

routes.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./static/html/index.html"))
})

// routes.use('/api', require('./controllers/index'))

app.listen(PORT, ()=> {
    console.log(`Server is Live on http://localhost:${PORT}`)
})


