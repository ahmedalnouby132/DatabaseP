const Sequelize = require("sequelize");

const sequelize = require("../Database/db");

const employee = sequelize.define("employee", {
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
  email: Sequelize.STRING,
  Dcode: {
    type: Sequelize.INTEGER,
    references: {
      model: "department",
      key: "Dcode"
    }
  },
  main_salary: Sequelize.INTEGER,
  BDate: Sequelize.DATE,
  noofHours: Sequelize.INTEGER,
  Occupation: Sequelize.ENUM("DOCTOR", "NURSE", "ADMIN"),
  pass: Sequelize.STRING,

});

module.exports = employee;
