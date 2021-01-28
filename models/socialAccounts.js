const {DataTypes} = require('sequelize');
const sequelize = require('../utils/databaseConnection');

const SocialAccounts = sequelize.define('socialAccount',
{
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true

    },
    phoneNum:{
    type:DataTypes.BIGINT,
    allowNull:true,
    defaultValue :null,

    },
    instagram_URL:{
        type:DataTypes.STRING,
    allowNull:true,
    defaultValue :null,
    },
    facebook_URL:{
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue :null,
    },
    twitter_URL:{
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue :null,
    },
    youtube_URL:{
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue :null,
    },
    pintrest_URL:{
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue :null,
    },
    tumblr_URL:{
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue :null,
    },
    telegram_URL:{
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue :null,
    }

}
);

module.exports  = SocialAccounts; 