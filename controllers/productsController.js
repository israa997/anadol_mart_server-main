const asyncHandler = require("express-async-handler");
const Country = require("../models/country");
const Product = require('../models/products');
const ProductColor = require("../models/product_color");
const productColorImages = require("../models/product_color_images");
const ProductColorSizes = require("../models/product_color_sizes");


const fetchAllProducts = asyncHandler(async (req, res, next) => {
    let existingProducts;
    try {
        existingProducts = await Product.findAll({
            include: [{
              model: ProductColor,
            include: [{
                model: productColorImages
            },
            {
                model: ProductColorSizes
            }]
        },
         ]
        });
    } catch (err) {
        res.status(500);
        throw new Error('fetching products failed');
    }
    if(existingProducts.length == 0) {
        throw new Error ('no product found')
    }
    return res.status(200).json(existingProducts);
});

const createNewProduct = asyncHandler(async (req, res, next) => {
    const {ar_name, en_name, tr_name, fr_name, SKU_code, description} = req.body;
    let existingProducts;
    try {
        existingProducts = await Product.findOne({ where: { SKU_code: SKU_code } });
    } catch (err) {
        res.status(500);
        throw new Error('creating product failed, please try again later.');
    }
  
    if (existingProducts) {
        res.status(422);
        throw new Error('Product exists already, please login instead.')
    }
    let createdProduct;
    try {
        createdProduct = await Product.create({
            ar_name,
            tr_name,
            en_name,
            fr_name,
            SKU_code,
            description
        });
    } catch (err) {
        res.status(500);
        throw new Error('creating product failed, please try again later.')
}
}
);


exports.fetchAllProducts = fetchAllProducts;
exports.createNewProduct = createNewProduct;
