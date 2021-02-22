const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const WishListUser = sequelize.define('wishlistuser', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
});

module.exports = WishListUser;