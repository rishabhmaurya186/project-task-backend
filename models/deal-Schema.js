const Joi = require('joi');

const dealSchema = Joi.object({
    car_id: Joi.string().required(),
    deal_info: Joi.object().required()
});

const  deals = (req, res, next) => {
    const { error } = dealSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
  const validateDeals= {deals}
  module.exports = validateDeals;
