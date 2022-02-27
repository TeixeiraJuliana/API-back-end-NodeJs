 const Sequelize = require('sequelize');
 const confData = require('../bd');
 const sequelize = new Sequelize(confData);
 module.exports = sequelize