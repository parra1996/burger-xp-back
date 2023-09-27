const config = require('./config/config.json');
const { Sequelize } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(
  process.env.DB_DATABASE ,
  process.env.DB_USER ,
  process.env.DB_PASSWORD ,
  {
    host: process.env.DB_HOST ,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
      max: 5, 
      min: 0, 
      acquire: 30000, 
      idle: 10000, 
    },
  }
);

module.exports = sequelize.authenticate().then((db) => {
  console.log('MYSQL connected');
  return db;
});
