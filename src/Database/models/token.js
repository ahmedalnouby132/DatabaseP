const Sequelize = require("sequelize");

const sequelize = require("../db");

const tokens = sequelize.define("tokens", {
  EID: {
    type: Sequelize.INTEGER,
    references: {
      model: "employee",
      key: "ID"
    }
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expiresAfter: Sequelize.TIME,
  isEmployee: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

module.exports = tokens;
