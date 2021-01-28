const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');
const Review = sequelize.define('review', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    review_text: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    star_rate: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            min: 1,
            max: 5
        }
    }
});

module.exports = Review;