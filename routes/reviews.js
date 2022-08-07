var express = require("express");
var router = express.Router();
const { addReview } = require("../controller/reviewController");

router.post("/", addReview);

module.exports = router;