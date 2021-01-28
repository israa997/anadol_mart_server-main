const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const WishList = sequelize.define('wishlist', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
});

module.exports = WishList;