const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const Currency = sequelize.define('currency', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      currency_name_AR: {
          type: DataTypes.STRING,
          allowNull: false
      },
      currency_name_FR: {
          type: DataTypes.STRING,
          allowNull: false
      },
      currency_name_TR: {
          type: DataTypes.STRING,
          allowNull: false
      },
      currency_name_EN: {
          type: DataTypes.STRING,
          allowNull: false
      },
      currency_code: {
          type: DataTypes.STRING,
          allowNull: false
      },
      exchange_rate: {
          type: DataTypes.DOUBLE,
          allowNull: false
      }
    });

module.exports = Currency;