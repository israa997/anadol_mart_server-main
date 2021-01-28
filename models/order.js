const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/databaseConnection");
const Order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  order_status: {
    type: DataTypes.ENUM,
    values: ["recived", "shipped", "delivered"],
    allowNull: false,
  },
  
  total_price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  shipping_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coupon_isUsed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  used_coupon: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_delivered: {
    type: DataTypes.BOOLEAN,
    allowNull:false,
    defaultValue: false
  },
  delivered_At: {
      type: DataTypes.DATE,
      allowNull: true
  },
  discount_percentage: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  payment_way: {
    type: DataTypes.ENUM,
    values: ["postPay", "prePay"],
  },
});

module.exports = Order;
