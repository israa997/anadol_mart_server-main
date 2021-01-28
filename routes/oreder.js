const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/ordersController');
const { protect } = require('../middleware/authMiddleware');




router.get('/getAllOrders', OrderController.fetchAllOrders);
router.get('/:id',protect,  OrderController.fetchOrderById);
router.get('/', protect, OrderController.userOrders);
module.exports = router;
