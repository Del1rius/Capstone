const { sign, verify} = require("jsonwebtoken")
require("dotenv").config()

function createToken(user) {
    return sign( 
        {
            emailAdd: user.emailAdd,
            userPass: user.userPass,
        },

        process.env.SECRET_KEY,

        {
            expiresIn: "1h",
        }
    )
}

function verifyAToken(req, res, next) {
    try {
        const token = 
        req.cookies["AuthorizedUser"] !== null
        ? req.cookies["AuthorizedUser"]
        : "User Not Registered!"
         
        const isValid = null

        if (!token) {
            isValid = verify(token, process.env.SECRET_KEY)

            if (isValid) {
                req.authenticated = true
                next()
            } else {
                res.json({
                    status: res.statusCode,
                    message: "Please Register!"
                })
            }
        } else {
            res.json({
                status: res.statusCode,
                message: "Please Register!"
            })
        }
    } catch (err) {
        res.json({
            status: res.statusCode,
            message: err.message
        })
    }
}

module.exports = { createToken, verifyAToken}