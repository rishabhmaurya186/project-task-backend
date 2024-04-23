const Joi = require('@hapi/joi');

const userSchema = Joi.object({
    user_email: Joi.string().email().required(),
    user_id: Joi.string().required(),
    user_location: Joi.string().required(),
    user_info: Joi.string().required(),
    password: Joi.string().required(),
    vehicle_info: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required() 
});

function validateUserData(req, res, next) {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}
module.exports = { validateUserData };
