const express = require("express");
const router = express.Router();
const Trainer = require("../model/Trainer");
const reviewController = require("../controllers/review-controller");

router.get("/", reviewController.getAllReviews);
router.post("/", reviewController.addReview);

router.put("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);



module.exports = router;