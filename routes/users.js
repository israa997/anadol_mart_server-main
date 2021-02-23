const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const userController = require('../controllers/usersController');

/* GET users listing. */
router.post('/login',userController.login);
router.post('/signup',userController.signup);
router.get('/profile',protect, userController.getUserProfile);
router.put('/updateProfile',protect, userController.updateUserProfile);
router.post('/pay',protect, userController.makePayment);
router.post('/wishlist/:id',protect, userController.wishlist)  
router.get('/list',protect,userController.userWishList);

module.exports = router;
