// const { body, param, query, check } = require("express-validator");
const { body, validationResult } = require("express-validator");


async function validateResult(req, res, next) {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    next();

}



const registerUserValidationRules = [

    body("username")
        .isString()
        .withMessage("Username must be a string.")
        .isLength({ 
            min: 3, 
            max: 20 
        })
        .withMessage("Username must be between 3-20 characters."),

    body("email")
        .isEmail()
        .withMessage("Invalid Email."),

    body("password")
        .isLength({ 
            min: 6 
        })
        .withMessage("Password must be at least 6 characters long."),

    // function call
    validateResult

]





module.exports = { registerUserValidationRules };