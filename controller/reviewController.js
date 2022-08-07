const Review = require("../model/reviewModel");
const Product = require("../model/productModel");
const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");

const addReview = asyncHandler(async (req, res) => {
    const userID = req.body.user;
    const productID = req.body.product;
    const userExists = await User.findOne({ _id: userID });
    const productExists = await Product.findOne({ _id: productID });
    if ((userExists) || (productExists)) {
        const newReview = await Review.create(req.body);
        if (newReview) {
            res.status(200).json(JSON.stringify(newReview));
        }
    } else {
        res.status(400);
        throw new Error("User or Product not exists in DB");
    }
});

module.exports = {
    addReview,
};