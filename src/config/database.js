const { Sequelize } = require('sequelize');

const database = process.env.DB_DATABASE
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const dialect = process.env.DB_CONNECTION

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect 
})

const connection = async () => {

    try{

        await sequelize.authenticate();

        console.log('AUTENTIFICADO')

    }catch(e){

        console.log('FALLA DE AUTENTIFICACIÓN')

    }

}

module.exports = { sequelize, connection }