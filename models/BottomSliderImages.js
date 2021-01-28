const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');


const BottomSliderImages = sequelize.define('bottomsliderimage', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    image_ar_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_tr_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_en_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_fr_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile_image_ar_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile_image_tr_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile_image_en_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile_image_fr_url: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = BottomSliderImages;