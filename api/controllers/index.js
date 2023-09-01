const express = require("express")
const bodyParser = require("body-parser")
const routes = express.Router()
const { users, products, orders } = require("../models/index")
const verifyAToken = require("../middleware/authenticateUser")

routes.get("/users", (req, res) => {
    users.fetchUsers(req, res)
})

routes.get("/user/:id", (req, res) => {
    users.fetchUser(req, res)
})

routes.post("/register", bodyParser.json(), (req, res) => {
    users.register(req, res)
})

routes.post("/login", bodyParser.json(), (req, res) => {
    users.login(req, res)
})

routes.put("/user/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})

routes.patch("/user/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})

routes.get("/products", (req, res) => {
    products.fetchProducts(req, res)
})

routes.get("/products/:id", (req, res) => {
    products.fetchProduct(req, res)
})

routes.post("/product", (req, res) => {
    products.addProduct(req, res)
})

routes.put("/product/:id", (req, res) => {
    products.updateProduct(req, res)
})