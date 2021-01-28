const {DataTypes} = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const announcementEmails = sequelize.define('announcementEmail', {

id: {
type: DataTypes.INTEGER,
autoIncrement : true,
primaryKey: true,
allowNull: false
},
email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique: true,
    validate: {
      isEmail: true
    }
}
 
});

module.exports = announcementEmails;
