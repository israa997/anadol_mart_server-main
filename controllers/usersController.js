const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Iyzipay = require("iyzipay");
const asyncHandler = require("express-async-handler");
const sgMail = require("@sendgrid/mail");

const Country = require("../models/country");
const Product = require("../models/products");
const ProductColor = require("../models/product_color");
const productColorImages = require("../models/product_color_images");
const ProductColorSizes = require("../models/product_color_sizes");
const sequelize = require("../utils/databaseConnection");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const Order = require("../models/order");
const OrderItem = require("../models/orderItem");
const WishList = require("../models/wishList");

const User = require("../models/users");
const config = {
  lang: "fr",
  langFile: "./../../locals/ar.json",
};

const iyzipay = new Iyzipay({
  apiKey: "sandbox-pHAH16EwcfTTu07YxblHZtT5cOh6HLm9",
  secretKey: "sandbox-KlTA99gDHomZ2trmvI0tHvV61GTkk3dH",
  uri: "https://sandbox-api.iyzipay.com",
});

const i18n_module = require("i18n-nodejs");
const i18n = new i18n_module(config.lang, config.langFile);
console.log(i18n._lang);
console.log(i18n.__("Welcome"));

const signup = asyncHandler(async (req, res, next) => {
  const { name, email, phone_number, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ where: { email: email } });
  } catch (err) {
    res.status(500);
    throw new Error("Signing up failed, please try again later.");
  }

  if (existingUser) {
    res.status(422);
    throw new Error("User exists already, please login instead.");
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    res.status(500);
    throw new Error("Could not create user, please try again.");
  }
  let createdUser;
  try {
    createdUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone_number,
    });
  } catch (err) {
    res.status(500);
    throw new Error("Signing up failed, please try again later.~~");
  }
  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.Email },
      "supersecret_dont_share"
    );
    console.log(createdUser);
  } catch (err) {
    res.status(500);
    throw new Error("Signing up failed, please try again later.!!");
  }

  res.status(201).json({
    userId: createdUser.id,
    name: createdUser.name,
    email: createdUser.email,
    token: token,
  });
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);

  let existingUser;

  try {
    existingUser = await User.findOne({ where: { email: email } });
  } catch (err) {
    res.status(500);
    throw new Error("Logging in failed, please try again later.!!!");
  }

  if (!existingUser) {
    res.status(403);
    throw new Error("Invalid credentials, could not log you in.");
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    res.status(500);
    throw new Error(
      "Could not log you in, please check your credentials and try again."
    );
  }

  if (!isValidPassword) {
    res.status(403);
    // throw new Error('Invalid credentials, could not log you in.');
    throw new Error(i18n.__("Welcome"));
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
      },
      "supersecret_dont_share"
    );
  } catch (err) {
    res.status(500);
    throw new Error("Logging in failed, please try again later.");
  }
  console.log(existingUser);
  res.json({
    userId: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    phone_number: existingUser.phone_number,
    token: token,
  });
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.user.id);

  if (user) {
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});



const updateUserInfo = asyncHandler(async (req, res, next) => {
  const { name, email, phone_number, password } = req.body;
  console.log('req.body',req.body)
})

const makePayment = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  const ip =
    req.headers["x-forwarded-for"] ||
    req.remoteAddress ||
    req.socket.remoteAddress ||
    (req.socket ? req.socket.remoteAddress : null);
  console.log("orderItems", orderItems);
  const basketItems = [];

  orderItems.map((item) => {
    for (i = 1; i <= item.qty; i++) {
      basketItems.push({
        id: item.name,
        name: item.name,
        category1: item.name,
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: item.price,
      });
    }
  });
  const request = {
    locale: Iyzipay.LOCALE.EN,
    price: itemsPrice,
    paidPrice: totalPrice,
    currency: Iyzipay.CURRENCY.USD,
    installment: "1",
    paymentCard: {
      cardHolderName: paymentMethod.cardHolderName,
      cardNumber: paymentMethod.cardNumber,
      expireMonth: paymentMethod.expireMonth,
      expireYear: paymentMethod.expireYear,
      cvc: paymentMethod.cvc,
    },
    buyer: {
      id: req.user.id,
      name: req.user.name,
      surname: req.user.name,
      gsmNumber: req.user.phone_number,
      email: req.user.email,
      identityNumber: "74300864791",
      registrationAddress: shippingAddress.address,
      ip: ip,
      city: shippingAddress.city,
      country: shippingAddress.country,
    },
    shippingAddress: {
      contactName: req.user.name,
      city: shippingAddress.city,
      country: shippingAddress.country,
      address: shippingAddress.address,
    },
    billingAddress: {
      contactName: req.user.name,
      city: shippingAddress.city,
      country: shippingAddress.country,
      address: shippingAddress.address,
    },
    basketItems: basketItems,
  };

  iyzipay.payment.create(request, async (err, result) => {
    console.log(err, result);
    if (result.status === "success") {
      try {
        const transaction = await sequelize.transaction(async (t) => {

          for (i = 0; i < orderItems.length; i++) {
            var color = orderItems[i].color;
            var qty = orderItems[i].qty;
            var size = orderItems[i].size;
            const product = await Product.findOne(
              {
                where: { product_slug_name: orderItems[i].product },
                include: [
                  {
                    model: ProductColor,
                    include: [
                      {
                        model: productColorImages,
                      },
                      {
                        model: ProductColorSizes,
                      },
                    ],
                  },
                  {
                    model: Country,
                  },
                ],
              },
              { transaction: t }
            )
              .then(async (product) => {
                await ProductColor.findOne(
                  {
                    where: { productId: product.id, color_name: color },
                  },
                  { transaction: t }
                ).then(async (productColor) => {
                  await ProductColorSizes.findOne(
                    {
                      where: { productcolorId: productColor.id, size_name: size },
                    },
                    { transaction: t }
                  )
                    .then(async (productColorSizes) => {
                      await productColorSizes
                        .update(
                          { quantity: productColorSizes.quantity - qty },
                          {
                            where: { productcolorId: productColor.id },
                          },
                          { transaction: t }
                        )
                        .then(async (res) => {});
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
          const order = await Order.create(
            {
              order_status: result.status,
              total_price: totalPrice,
              is_paid: true,
              coupon_isUsed: false,
              used_coupon: null,
              discount_percentage: null,
              payment_way: "postPay",
              userId: req.user.id,
            },
            {
              transaction: t,
            }
          );

          for (i = 0; i < orderItems.length; i++) {
            const product = await Product.findOne(
              {
                where: { product_slug_name: orderItems[i].product }}, {transaction: t})
            const orderItem = await OrderItem.create(
              {
                product_name: orderItems[i].name,
                color: orderItems[i].color,
                size: orderItems[i].size,
                quantity: orderItems[i].qty,
                orderId: order.id,
                productId: product.id
              },
              { transaction: t }
            );
          }
        });
        console.log(transaction);

      } catch (error) {
        console.log(error);
      }

      const clientMail = {
        to: req.user.email,
        from: "info@anadolmart.com",
        subject: "order has been placed successfully",
        html: `<body style="color:blue;text-align:center;">
                  <img src="https://anadolmart.com/assets/images/layout-1/logo/logo.png"></img>
                    <h1> thank you for choosing anadolmart </h1>
                    <h2> we received your order and we will confirm it soon </h2>
                    </body>`,
      };
      sgMail.send(clientMail);

      const merchantMail = {
        to: "ahmad@anadolmart.com",
        from: "info@anadolmart.com",
        subject: "new order has been placed",
        html: `<body style="color:blue;text-align:center;">
                <img src="https://anadolmart.com/assets/images/layout-1/logo/logo.png" ></img>
                  <h1> thank you for choosing anadolmart </h1>
                  <h2> we received your order and we will confirm it soon </h2>
              </body>`,
      };
      sgMail.send(merchantMail);
      // return res.status(201).json(order);
    }
  });
});

const addToWishList = asyncHandler(async(req, res, next)=> {
  const user = await User.findByPk(req.user.id);
  let createWishList;
if(user){
  try {
createWishList = await WishList.create(  {

    userId : user.id,
   include :{
     model: Product
   }
  
});

}catch (err) {
res.status(500);
throw new Error(err);
}
}
res.json(createWishList);
});

const userWishList = asyncHandler(async (req, res, next) => {
  let existingFavorits;
  try { 
    existingFavorits = await WishList.findAll({
      where:
      {
         userId : req.user.id
      },
      include: {  model: Product}
       });
   console.log(req.user.id)
  } catch (err) {
    res.status(500);
    throw new Error("fetching failed");
  }
  if (existingFavorits.length == 0) {
    throw new Error("No list yet");
  }
  return res.status(200).json(existingFavorits);
});

const deleteWishList = asyncHandler(async(req,res,next)=> {
 
  try{
  let deleteRecord;
 deleteRecord = WishList.destroy({
      where: {
          id: req.params.id
      }
  })}
  catch(error){
      res.status(500).json(error);
  }
  res.status(200).json({message:"Deleted successfully"}); 
});

exports.login = login;
exports.signup = signup;
exports.getUserProfile = getUserProfile;
exports.makePayment = makePayment;
exports.updateUserInfo = updateUserInfo;
exports.addToWishList = addToWishList;
exports.userWishList = userWishList;
exports.deleteWishList = deleteWishList;