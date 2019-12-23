const Sequelize = require('sequelize');
const dbPass = require('../../config/config').dbPass
const password = dbPass
const dbname = 'hisdb'
const sequelize = new Sequelize(dbname, 'root', password, {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
