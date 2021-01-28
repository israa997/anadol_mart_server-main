const asyncHandler = require("express-async-handler");
const Order = require("../models/order");
const OrderItem = require("../models/orderItem");
const User = require("../models/users");
const fetchAllOrders = asyncHandler(async (req, res, next) => {
  let existingOrders;
  try {
    existingOrders = await Order.findAll({
      include: [
        {
          model: OrderItem,
        },
      ],
    });
  } catch (err) {
    res.status(500);
    throw new Error("fetching orders failed");
  }
  if (existingOrders.length == 0) {
    throw new Error("no order found");
  }
  return res.status(200).json(existingOrders);
});
const fetchOrderById = asyncHandler(async (req, res, next) => {
  let existingOrder;
  try {
    existingOrder = await Order.findByPk(req.params.id, { include: { all: true }});
  } catch (err) {
    res.status(500);
    throw new Error("fetching orders failed");
  }
  if (existingOrder.length == 0) {
    throw new Error("no order found");
  }
  return res.status(200).json(existingOrder);
});

const userOrders = asyncHandler(async (req, res, next) => {
  let existingOrders;
  try { 
    existingOrders = await Order.findAll({
      where:
      {
         userId : req.user.id
      },
      include: {  model: OrderItem}
       });
   console.log(req.user.id)
  } catch (err) {
    res.status(500);
    throw new Error("fetching orders failed");
  }
  if (existingOrders.length == 0) {
    throw new Error("No Orders yet");
  }
  return res.status(200).json(existingOrders);
});


exports.fetchAllOrders = fetchAllOrders;
exports.fetchOrderById = fetchOrderById;
exports.userOrders = userOrders;