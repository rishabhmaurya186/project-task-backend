const Joi = require('joi');

const dealershipSchema = Joi.object({
    dealership_email: Joi.string().email().required(),

    dealership_name: Joi.string().required(),
    dealership_location: Joi.string().required(),
    password: Joi.string().required(),
    dealership_info: Joi.object().required(),
    cars: Joi.string(), 
    deals: Joi.string(), 
    sold_vehicles: Joi.string() 
});

const  dealership = (req, res, next) => {
    const { error } = dealershipSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
  const validateDealership = {dealership}
  module.exports = validateDealership;
