    const pool = require("../../config/database") //we can create sql queries with the use of pool.

module.exports = {
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
    }, //will recieve data from controller.
    getUsers: callBack => {
        pool.query(
          `select id, userName, firstName, lastName, password, email, type from users`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
    },
    getUserById: (id, callback) => {
        pool.query(
            `select id, userName, firstName, lastName, password, email, type from users`,
            [id],
            (error, results, fields) => {
              if (error) {
                callBack(error);
              }
              return callBack(null, results);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
          `update registration set userName=?, firstName=?, lastName=?, password=?, email=?, type=? where id = ?`,
          [
            data.username,
            data.user_name,
            data.user_surname,
            data.user_password,
            data.user_email,
            data.user_type
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
          `delete from users where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
    }

}
