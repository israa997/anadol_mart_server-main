const path = require('path');
const express = require('express');
const sequelize = require('./utils/databaseConnection');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

//add cors origin
app.use(cors());


//import models
const wishList = require('./models/wishList');
const privacy_policy = require('./models/privacy_policy');
const topsliderImage = require('./models/Topsliderimages');
const bottomsliderImage = require('./models/BottomSliderImages');
const supervisor = require('./models/supervisor');
const advertisementCard = require('./models/advertisementCard');
const category = require('./models/category');
const country = require('./models/country');
const currency = require('./models/currency');
const order = require('./models/order');
const orderItem = require('./models/orderItem');
const paymentInfo = require('./models/paymentInfo');
const product_color_images = require('./models/product_color_images');
const product_color_sizes = require('./models/product_color_sizes');
const product_color = require('./models/product_color');
const product = require('./models/products');
const reviews = require('./models/reviews');
const users = require('./models/users');
const marketer = require('./models/marketer');
const banner = require('./models/banner');
const about = require('./models/about');

// associate the models

users.hasOne(wishList);
wishList.hasMany(product);
users.hasMany(order);
users.hasMany(paymentInfo);
paymentInfo.hasMany(order);
order.hasMany(orderItem);
orderItem.belongsTo(product);
users.belongsToMany(product, {through: reviews});
product.belongsToMany(users, {through: reviews});
category.hasMany(product);

product.hasMany(product_color);
product_color.hasMany(product_color_images);
product_color.hasMany(product_color_sizes);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/users', require('./routes/users'));
app.use('/api/home', require('./routes/home'));
app.use('/api/products', require('./routes/product'));
app.use('/api/orders', require('./routes/oreder'));
sequelize.sync().then(
    app.listen(process.env.PORT || 5000),
    console.log('app is working on port: 5000')
);