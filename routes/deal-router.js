const express = require("express");
const router = express.Router();

const dealValidation = require("../models/deal-Schema")

const dealController = require("../controller/deal-controller")


router.post("/add",dealValidation.deals,dealController.addDeal)

module.exports = router;