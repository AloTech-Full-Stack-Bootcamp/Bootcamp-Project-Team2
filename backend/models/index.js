const config = require("../config/dbConfig.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.db,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: 0,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/userModel.js")(sequelize, Sequelize);
db.role = require("../models/roleModel.js")(sequelize, Sequelize);

//association between user and model is a many to many. 
// – One User can have several Roles.
// – One Role can be taken on by many Users.
db.role.belongsToMany(db.user, { //one user can have many roles.
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;