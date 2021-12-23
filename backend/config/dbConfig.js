module.exports = { //first five parameters are for MySQL connection.
    host: "localhost",
    user: "root",
    password: "123456",
    db: "userdb",
    dialect: "mysql",
    pool: { //pool is optional, it will be used for Sequelize connection pool configuration:

      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

