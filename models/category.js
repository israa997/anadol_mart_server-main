const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const Category = sequelize.define('category', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      category_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      category_slug_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category_image_url: {
          type: DataTypes.STRING,
          allowNull: true
      }
    });

module.exports = Category;