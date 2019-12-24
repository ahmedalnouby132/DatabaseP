const Sequelize = require('sequelize');

const sequelize = require('../db');

const prescription = sequelize.define('prescription', {
  Weight: {
    type: Sequelize.INTEGER,

  },
  BloodPressure: {
    type: Sequelize.STRING,
  },
  Gender: Sequelize.ENUM("Male","Female"),
  PatientNotes:Sequelize
});
module.exports = prescription;
