const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  moibleno: {
    type: Sequelize.BIGINT,
  },
  email: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
