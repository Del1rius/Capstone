const db = require("../config/db.config")

class Products {
    fetchProducts(req, res) {
        const query = `SELECT prodID, prodName, quantity, price, category, prodUrl
        FROM Products;`

        db.query(query, (err, data) => {
            if (err) throw err
            res.status(200).json(data)
        })
    }

    fetchProduct(req, res) {
        const query = `SELECT prodID, prodName, quantity, price, category, prodUrl
        FROM Products
        WHERE prodID = '${req.params.id}';`

        db.query(query, (err, data) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result,
            })
        })
    }

    addProduct(req, res) {
        const query = `INSERT INTO Products SET ?;`

        db.query(query, req.body, (err) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                message: "A Product has been added!"
            })
        })
    }

    updateProduct(req, res) {
        const query = `UPDATE Products SET ? WHERE prodID = ?;`

        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                message: "A Product Has Been Updated!"
            })
        })
    }

    deleteProduct(req, res) {
        const query = `DELETE FROM Products WHERE prodID = '${req.params.id}';`

        db.query(query, (err) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                message: "A PRODUCT HAS BEEN REMOVED FROM THE RECORDS!"
            })
        })
    }
}


module.exports = Products;