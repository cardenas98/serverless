const express = require('express')
const router = express.Router()
const { swapiController } = require('./../controllers/swapi')
const {validatorGet, validatorGetId, validatorSearch} = require('./../validators/swapi')

const get = router.get('/:name', validatorGet, new swapiController().getAll)
const id = router.get('/:name/:id', validatorGetId, new swapiController().getId)

module.exports = { get, id }