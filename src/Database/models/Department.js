const Sequelize = require('sequelize');

const sequelize = require('../db');

const department = sequelize.define('department', {
  Dcode: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Dname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  NumOfWorkers: Sequelize.INTEGER
});
module.exports = department;
