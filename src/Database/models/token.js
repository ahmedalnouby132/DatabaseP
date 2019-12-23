const Sequelize = require("sequelize");

const sequelize = require("../db");

const tokens = sequelize.define("tokens", {
  token: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expiresAfter: Sequelize.DATE,
  isEmployee: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

module.exports = tokens;
