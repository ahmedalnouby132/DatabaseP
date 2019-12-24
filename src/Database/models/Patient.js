const Sequelize = require("sequelize");

const sequelize = require("../db");

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
  SDate: Sequelize.DATE,
  BDate: Sequelize.DATE,
  Occupation:{
    type:Sequelize.STRING,
    defaultValue: "PATIENT"
  },
  pass: Sequelize.STRING
});

module.exports = Patient;
