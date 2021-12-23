const {create} = require("./userService")
const {genSaltSync, hashSync} = require("bcrypt")

module.exports = {
    //user will pass the req and resp parameters.
    createUser: (req,res) => {
        const body = req.body //whatever the user passes, save inside the body variable.
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt) //became the encrypted one in the body.
        create(body, (err, results) => {
            if(err){
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success: 1,
                data: results //whatever we are gettin the results, we are sending the users.
            }) 
        }) //
    }
}