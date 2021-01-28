const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const Banner = sequelize.define('about', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    header: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content: {
     type:DataTypes.TEXT,
     allowNull:false
    }

});

module.exports = Banner;