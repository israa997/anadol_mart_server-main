const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const Marketer = sequelize.define('marketer', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    marketer_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coupon_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discount_percentage: {
        type: DataTypes.DOUBLE,
        allowNull:false
    },
    coupon_duration: {
        type: DataTypes.DATE,
        allowNull: false
    },
    is_Active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

module.exports = Marketer;