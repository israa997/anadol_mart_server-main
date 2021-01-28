const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const ShippingAddresses = sequelize.define('shippingaddresses',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
         primaryKey: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    detailed_address: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = ShippingAddresses;