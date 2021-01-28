const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');


const TopSliderImages = sequelize.define('topsliderimage', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    refer_to_category_url:{
        type: DataTypes.STRING,
        allowNull: true
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

module.exports = TopSliderImages;