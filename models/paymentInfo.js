const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const PaymentInfo = sequelize.define('paymentinfo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    card_holder_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    card_number: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            isCreditCard: true,
        },
    },
    card_cvc_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    card_expire_month: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    card_expire_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = PaymentInfo;