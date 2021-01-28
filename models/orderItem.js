const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');


const OrderItem = sequelize.define('orderitem', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    item_price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
});

module.exports = OrderItem;