const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const About = sequelize.define('about', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    header_ar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content_ar: {
     type:DataTypes.TEXT,
     allowNull:false
    }, 
    header_fr: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content_fr: {
     type:DataTypes.TEXT,
     allowNull:false
    },
      header_tr: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content_tr: {
     type:DataTypes.TEXT,
     allowNull:false
    }, 
     header_en: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content_en: {
     type:DataTypes.TEXT,
     allowNull:false
    }


});

module.exports = About;