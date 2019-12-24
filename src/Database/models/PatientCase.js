const Sequelize = require('sequelize');

const sequelize = require('../db');

const patientCase = sequelize.define('pateintase', {
  Food_Allergies: {
    type: Sequelize.INTEGER,
  },  Tendency_Bleed: {
    type: Sequelize.INTEGER,
  },  Heart_Disease  : {
    type: Sequelize.INTEGER,
  },
  High_Blood_Pressure  : {
    type: Sequelize.INTEGER,
  },
  
  Diabetic  : {
    type: Sequelize.INTEGER,
  },
  
  Surgery  : {
    type: Sequelize.INTEGER,
  },
  
  Accident  : {
    type: Sequelize.INTEGER,
  },
  
  Others  : {
    type: Sequelize.INTEGER,
  },
  
  Female_Pregnancy  : {
    type: Sequelize.INTEGER,
  },
  
  Breast_Feeding  : {
    type: Sequelize.INTEGER,
  },
  
  Health_Insurance  : {
    type: Sequelize.INTEGER,
  },
  
  Low_Income  : {
    type: Sequelize.INTEGER,
  },
  
  Reference  : {
    type: Sequelize.INTEGER,
  },
  
  NumOfWorkers: Sequelize.INTEGER
});
module.exports = department;
