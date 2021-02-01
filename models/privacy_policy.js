const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const PrivacyPolicy = sequelize.define('privacy_policy', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    header_ar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content_ar: {
     type:DataTypes.TEXT,
     allowNull:false
    }, 
    header_fr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content_fr: {
     type:DataTypes.TEXT,
     allowNull:false
    },
      header_tr: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content_tr: {
     type:DataTypes.TEXT,
     allowNull:false
    }, 
     header_en: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content_en: {
     type:DataTypes.TEXT,
     allowNull:false
    }

});

module.exports = PrivacyPolicy;