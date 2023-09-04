const express = require("express")
const bodyParser = require("body-parser")
const route = express.Router()
const { users, products, orders } = require("../models")
const verifyAToken = require("../middleware/authenticateUser")

route.get("/users", (req, res) => {
    users.fetchUsers(req, res)
})

route.get("/user/:id", (req, res) => {
    users.fetchUser(req, res)
})

route.post("/register", bodyParser.json(), (req, res) => {
    users.register(req, res)
})

route.post("/login", bodyParser.json(), (req, res) => {
    users.login(req, res)
})

route.put("/user/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})

route.patch("/user/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})

route.get("/products", (req, res) => {
    products.fetchProducts(req, res)
})

route.get("/products/:id", (req, res) => {
    products.fetchProduct(req, res)
})

route.post("/product", (req, res) => {
    products.addProduct(req, res)
})

route.put("/product/:id", (req, res) => {
    products.updateProduct(req, res)
})

route.patch("product/:id", (req, res) => {
    products.updateProduct(req, res)
})

route.delete("product/:id", (req, res) => {
    products.deleteProduct
})

route.get("/orders", (req, res) => [
    orders.fetchOrders(req, res)
])

route.get("/user/:id/carts", (req, res) => {
    orders.fetchCart(req, res)
})

route.post("/user/:id/cart", bodyParser.json(), (req, res) => {
    orders.addToCart(req, res)
})

route.put("/user/:id/cart/:id", bodyParser.json(), (req, res) => {
    orders.updateCart(req, res)
})

route.patch("/user/:id/cart/:id", bodyParser.json(), (req, res) => {
    orders.updateCart(req, res)
})

route.delete("/user/:id/cart", (req, res) => {
    orders.clearCart(req, res)
})

route.delete("/user/:id/cart/:id", (req, res) => {
    orders.removeFromCart(req, res)
})

module.exports = {express, route}