const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const userController = require('../controllers/usersController');

/* GET users listing. */
router.post('/login',userController.login);
router.post('/signup',userController.signup);
router.get('/',protect, userController.getUserProfile);
router.put('/updateProfile',protect, userController.updateUserProfile);
router.post('/pay',protect, userController.makePayment);
router.put('/updateProfile', protect, userController.updateUserInfo);
router.post('/addToWishList',protect,userController.addToWishList);
router.get('/list/',protect,userController.userWishList);
router.delete('/deletelist/:id', userController.deleteWishList);
module.exports = router;
