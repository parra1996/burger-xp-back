const config = require('./config/config.json');
const { Sequelize } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(
  process.env.DB_DATABASE ,
  process.env.DB_USER ,
  process.env.DB_PASSWORD ,
  {
    host: process.env.DB_HOST ,
    port:  process.env.DB_PORT ,
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
      max: 5, // maximum number of connection in pool
      min: 0, // minimum number of connection in pool
      acquire: 30000, // maximum time, in milliseconds, that a connection can be idle before being released
      idle: 10000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
    },
  }
);

module.exports = sequelize.authenticate().then((db) => {
  console.log('MYSQL connected');
  return db;
});
