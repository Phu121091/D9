var express = require("express");
var router = express.Router();
const { createProduct } = require("../controller/productController");

router.post("/", createProduct);

module.exports = router;