const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

/**
 * @description validación de parámetros de envio por URL
 */

const validatorGet = [

    check("name").exists().notEmpty(),
    (req, res, next) => {

        return validateResults(req, res, next)

    }

]

const validatorGetId = [

    check("name").exists().notEmpty(),
    check("id").exists().notEmpty(),
    (req, res, next) => {

        return validateResults(req, res, next)

    }

]

const validatorSearch = [

    check("name").exists().notEmpty(),
    check("id").exists().notEmpty(),
    (req, res, next) => {

        return validateResults(req, res, next)

    }

]

module.exports = { validatorGet, validatorGetId, validatorSearch }