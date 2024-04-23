const express = require("express");
const router = express.Router();

const soldVehicleValidation = require("../models/sold-Vehicles-Schema")

const vehicleController = require("../controller/sold-vehicle-controller")


router.post("/add",soldVehicleValidation.soldVehicle,vehicleController.addSoldeVehicle)

module.exports = router;