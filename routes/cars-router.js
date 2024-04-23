const express = require("express");
const router = express.Router();
const varify = require('../middleware/jwt')
const carsValidation = require("../models/cars-schema")

const carController = require("../controller/cars-controller")

// router.use(varify.auth)
router.post("/add",carsValidation.cars,carController.addCar)
router.get("/",carController.getCar)
router.get("/:id",carController.getCarById)
router.delete("/:id",carController.deleteCar)

module.exports = router;