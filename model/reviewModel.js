const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
    },
    name: {
        type: String, required: true
    },
     rate: {
        type: Number, required: true
     },
     comment: {
        type: String, required: true
     },
     user: {
        type: mongoose.Schema.Types.ObjectId,
            ref: "User",
     }
 });

 const Review = mongoose.model("Review", reviewSchema);
 module.exports = Review;