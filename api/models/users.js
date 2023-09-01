const db = require("../config/db.config")
const {hash, compare, hashSync} = require("bcrypt")
const {createToken} = require("../middleware/authenticateUser")

class Users {
    fetchUsers(req, res) {
        const query = 
        `
        SELECT userID, firstName, lastName, emailAdd, userPass, userImg, userRole
        FROM Users;
        `
        db.query(query, (err, data) => {
            if (err) throw err
            res.json(data)
        })
    }

    fetchUser(req, res) {
        const query = 
        `
        SELECT userID, firstName, lastName, emailAdd, userPass, userImg, userRole
        WHERE ID = ?
        FROM Users;
        `
        db.query(query, (err, data) => {
            if (err) throw err
            res.json(data)
        })
    }
    
    async register(req, res) {
        const data = req.body

        data.userPass = await hash(data.userPass, 15)
        
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }

        const query = `INSERT INTO Users SET ?;`

        db.query(query, [data], (err) => {
            if (err) throw err

            let token = createToken(user)
            res.cookie("AuthorizedUser", token, {
                maxAge: 3600000,
                httpOnly: true
            })
            
            res.json({
                status: res.statusCode,
                message: "New User Register!"
            })
        })
    }

    login (req, res) {
        const {emailAdd, userPass} = req.body
        
        const query = `SELECT userId, firstName, lastName, emailAdd, userPass, userImg, userRole
        FROM Users
        WHERE emailAdd= '${emailAdd}';`

        db.query(query, async (err, data) => {
            if (err) throw err

            if (!data?.length) {
                res.json({
                    status: res.statusCode,
                    message: "Incorrect email Address!"
                })
            } else {
                await compare(userPass, data[0].userPass, (cErr, cResult) => {
                    if (cErr) throw cErr

                    const token = createToken({
                        emailAdd,
                        userPass,
                    })

                    res.cookie("AuthorizedUser", token, {
                        maxAge:3600000,
                        httpOnly: true,
                    })

                    if (cResult) {
                        res.json({
                            message: "Welcome Back to Kustom Kulture",
                            token,
                            result: data[0]
                        })
                    } else {
                        res.json({
                            status: res.statusCode,
                            message: "Unregistered user or incorrect password provided!"
                        })
                    }
                })
            }
        })

    }

    updateUser(req, res) {
        const query = "UPDATE Users SET ? WHERE userID = ?;"

        const data = req.body

        data.userPass = hashSync(data.userPass, 15)

        db.query(query, [data, req.params.id], (err) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                message: "User Details Updated!"
            })
        })
    }

    deleteUser(req, res) {
        const query = `DELETE FROM Users WHERE userID = ${req.params.id};`

        db.query(query, (err) => {
            if (err) throw err

            res.json({
                status: res.statusCode,
                message: "User Deleted!"
            })
        })

    }
}

module.exports = Users;