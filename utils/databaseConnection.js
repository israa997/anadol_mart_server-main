const { Sequelize }  = require('sequelize');
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize('anadol_mart_DB', `${process.env.DB_USER}`, '', {
    host: '127.0.0.1',
    dialect: 'mysql'
  });


module.exports = sequelize;