const { check } = require("express-validator")
const validateResults = require("./../utils/handleValidator")

/**
 * @description validación de parámetros de envio por URL
 */

const validatorCreate = [

    check("name").exists().notEmpty().isLength({min:3, max:99}),
    check("password").exists().notEmpty().isLength({min:3, max:15}),
    check("email").exists().notEmpty().isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }

]

module.exports = { validatorCreate }