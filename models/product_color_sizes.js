const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const ProductColorSizes = sequelize.define('productcolorsizes', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    size_symbol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    }
});

module.exports = ProductColorSizes;