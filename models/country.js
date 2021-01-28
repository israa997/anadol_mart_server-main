const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const Country = sequelize.define('country', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      country_name_AR: {
          type: DataTypes.STRING,
          allowNull: false
      },
      country_name_EN: {
          type: DataTypes.STRING,
          allowNull: false
      },
      country_name_FR: {
          type: DataTypes.STRING,
          allowNull: false
      },
      country_name_TR: {
          type: DataTypes.STRING,
          allowNull: false
      },
      shipping_price: {
          type: DataTypes.DOUBLE
      }
    });

module.exports = Country;