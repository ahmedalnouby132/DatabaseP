const Sequelize = require('sequelize');

const password = ''
const dbname = 'hisdb'
const sequelize = new Sequelize(dbname, 'root', password, {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
