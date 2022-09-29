const express = require('express')
const router = express.Router()
const { validatorCreate } = require('./../validators/user')
const { UserController }  = require('./../controllers/user')

const create = router.post("/create", validatorCreate, new UserController().createUser)
const get = router.get("/", new UserController().getUser)

module.exports = { create, get }