const Joi = require('joi');
const soldVehiclesSchema = Joi.object({
  car_id: Joi.string(),
  vehicle_info: Joi.object().required()
});

const  soldVehicle = (req, res, next) => {
  const { error } = soldVehiclesSchema.validate(req.body);
  if (error) {
      return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
const validateSoldVehicle = {soldVehicle}
module.exports = validateSoldVehicle;