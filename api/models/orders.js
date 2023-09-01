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
        const query = `SELECT prodName, price, prodUrl FROM Users INNER JOIN Orders ON Users.userID = Orders.userID INNER JOIN Products ON Orders.prodID = Products.prodID WHERE Orders.userID = Users.userID`

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
}