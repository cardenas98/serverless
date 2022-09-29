require('dotenv').config
const express = require('express')
const cors = require('cors')
const { connection } = require('./config/database');
const app = express()

app.use(cors())
app.use(express.json())

const healtcheck = app.use("/", require("./routes/status"))
const getSwapi = app.use('/swapi', require("./routes/swapi").get)
const getIdSwapi = app.use('/swapi', require("./routes/swapi").id)
const createUser = app.use('/user', require("./routes/user").create)
const getUser = app.use('/user', require("./routes/user").get)

connection()

module.exports = { healtcheck, getSwapi, getIdSwapi, createUser, getUser }