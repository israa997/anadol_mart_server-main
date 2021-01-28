const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const Banner = sequelize.define('banner', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    banner_text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Banner;