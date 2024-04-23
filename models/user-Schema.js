const Joi = require('@hapi/joi');
const { ObjectId } = require('mongodb');

const userSchema = Joi.object({
    user_email: Joi.string().email().required(),
    user_location: Joi.string().required(),
    user_info: Joi.object(),
    password: Joi.string().required(),
    vehicle_info: Joi.string()
});
const loginSchema = Joi.object({
    user_email: Joi.string().email().required(),
    password: Joi.string().required()
});

const RegistationData = (req, res, next) => {
    
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const LoginData = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
const validateUser = {RegistationData,LoginData}
module.exports = validateUser;
