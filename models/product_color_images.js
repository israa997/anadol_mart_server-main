const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const productColorImages = sequelize.define('productcolorimages', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
module.exports = productColorImages;