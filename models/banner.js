const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const Banner = sequelize.define('banner', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    banner_text_AR: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    banner_text_EN: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    banner_text_FR: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    banner_text_TR: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Banner;