const { DataTypes } = require("sequelize");
const sequelize = require("../utils/databaseConnection");
const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  product_slug_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ar_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  en_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tr_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fr_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  SKU_code: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
  },
  ar_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tr_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  en_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fr_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isNew: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  isHomeScreenProduct: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  discount_percentage: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
});
module.exports = Product;
