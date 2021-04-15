// Validation
const Joi = require('@hapi/joi');


// lets wrap it with the function

const registerValidation = (data) => {

    const schema = Joi.object( {
        name : Joi.string().min(6).required(),
        email : Joi.string().min(6).required().email(),
        password : Joi.string().min(6).required()
    }
    );

    return schema.validate(data)
}

// login validationn

const loginValidation = (data) => {

    const schema = Joi.object( {
        email : Joi.string().min(6).required().email(),
        password : Joi.string().min(6).required()
    }
    );

    return schema.validate(data)
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
