const pool = require("../../config/database") //we can create sql queries with the use of pool.

module.exporst = {
    create: (data, callBack) => {
        pool.query(
            `insert into users(userName, firstName, lastName, password, email, type)
                        values(?,?,?,?,?,?)`,
            [
                data.username,
                data.user_name,
                data.user_surname,
                data.user_password,
                data.user_email,
                data.user_type
            ],
            (error, results, fields) => { //if error, then call error, if we dont have the error, 
                if(error){
                    return callBack(error)
                }
                return callBack(null, results)
            } //if error is there, 
        )
    } //will recieve data from controller.
}