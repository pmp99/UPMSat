const {check} = require('express-validator');

exports.signupValidation = [
    check('username', 'Username is required').not().isEmpty(),
    check('email').not().isEmpty().withMessage('Email is required').bail().isEmail().normalizeEmail({ gmail_remove_dots: true }).withMessage('Please include a valid email'),
    check('password').not().isEmpty().withMessage('Password is required').bail()
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 0
        }).withMessage('Password must be 8 or more characters and contain at least one lowercase, one uppercase and one number'),
    check('confirmPassword').custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error('Confirm password must be the same')
        } else {
            return value
        }
    })
]

exports.loginValidation = [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty()
]