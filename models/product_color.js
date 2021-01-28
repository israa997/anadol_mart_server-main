const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const ProductColor = sequelize.define('productcolor', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    color_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    main_image_URL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    video_Url: {
        type: DataTypes.STRING,
        allowNull: true
    }

});

module.exports = ProductColor;