const express = require("express");
const router = express.Router();

const dealershipValidation = require("../models/dealership-Schema")

const dealershipController = require("../controller/dealership-controller")


router.post("/add",dealershipValidation.dealership,dealershipController.addDealership)
router.get("/",dealershipController.getdealerships)

module.exports = router;