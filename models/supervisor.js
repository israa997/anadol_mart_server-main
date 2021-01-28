const { DataTypes } = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const Supervisor = sequelize.define('supervisor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        } 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 6
        }
    },
    role: {
        type: DataTypes.ENUM,
        values: ['manager', 'editor', 'order manager','employee', 'inspector']
    }
});


module.exports = Supervisor;