const Joi = require('joi');

const carSchema = Joi.object({
    type: Joi.string().required(),
    name: Joi.string().required(),
    model: Joi.string().required(),
    car_info: Joi.object().required()
});



const  cars = (req, res, next) => {
  const { error } = carSchema.validate(req.body);
  if (error) {
      return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
const validateCars = {cars}
module.exports = validateCars;