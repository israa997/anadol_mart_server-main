const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const PrivacyPolicy = sequelize.define('privacy_policy', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    header: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = PrivacyPolicy;