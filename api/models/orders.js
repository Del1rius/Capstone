const db = require("../config/db.config")


class Orders {
    fetchOrders(req, res) {
        const query = `SELECT orderID, userID, prodID, quantity FROM Orders;`

        db.query(query, (err, data) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                data
            })
        })
    }

    fetchCart(req, res) {
        const query = `SELECT prodName, price, prodUrl FROM Users INNER JOIN Orders ON Users.userID = Orders.userID INNER JOIN Products ON Orders.prodID = Products.prodID WHERE Orders.userID = Users.userID;`

        db.query(query, (err, data) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                data
            })
        })
    }

    addToCart(req, res) {
        const query = `INSERT INTO Orders SET ?`

        db.query(query, [req.body], (err) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                message: "Product Added to Cart"
            })
        })
    }

    updateCart(req, res) {
        const query = `UPDATE Orders SET ? WHERE orderID = ?;`

        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                message: "Order Updated!"
            })
        })
    }

    clearCart(req, res) {
        const query = `DELETE FROM Orders WHERE userID = '${req.params.id}';`

        db.query(query, (err) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                message: "Cart Cleared!"
            })
        })
    }

    removeFromCart(req, res) {
        const query = `DELETE FROM Orders WHERE prodID = '${req.params.id}';`

        db.query(query, (err) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                message: "Item Removed From Cart!"
            })
        })
    }
}

module.exports = Orders;