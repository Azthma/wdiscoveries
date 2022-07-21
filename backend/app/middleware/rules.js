const { param, body } = require('express-validator');

const userRegistrationRules = () => {
    return [
        body('name')
            .notEmpty()
            .withMessage('Full name is required').bail(),
        body('birthdate')
            .notEmpty()
            .withMessage('Birthdate is required').bail(),
        body('address')
            .notEmpty()
            .withMessage('Address is required').bail(),
        body('email')
            .notEmpty()
            .withMessage('Email is required').bail()
            .isEmail()
            .withMessage('Invalid email format').bail(),
        body('password')
            .notEmpty()
            .withMessage('Password is required').bail()
            .isLength(6)
            .withMessage('Password is too short').bail()
    ];
};

module.exports = {
    userRegistrationRules,
};
