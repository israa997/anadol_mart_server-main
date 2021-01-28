const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');



const AdvertisementCard = sequelize.define('advertisement', {
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
    }
});

module.exports = AdvertisementCard;