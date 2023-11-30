const express = require("express");
const router = express.Router();
const Trainer = require("../model/Trainer");
const Product = require("..model/product");
const productController = require("../controllers/products-controller");

router.get("/", productController.getAllProducts);
router.post("/", productController.addProduct);
router.get("/:id", productController.getById);
router.put("/:id", productController.updateProduct);




module.exports = router;