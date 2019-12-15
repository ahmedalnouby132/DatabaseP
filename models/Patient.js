const Sequelize = require("sequelize");

const sequelize = require("../Database/db");

const Patient = sequelize.define("patient", {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  SSN: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  Fname: Sequelize.STRING,
  Lname: Sequelize.STRING,
  email: Sequelize.STRING,
  Dcode: {
    type: Sequelize.INTEGER,
    references: {
      model: "department",
      key: "Dcode"
    }
  },
  SDate: Sequelize.DATE,
  BDate: Sequelize.DATE,
  pass: Sequelize.STRING
});

module.exports = Patient;
