const { Sequelize } = require('sequelize');

const database = process.env.DB_DATABASE || 'node'
const username = process.env.USERNAME || 'admin'
const password = process.env.PASSWORD || '3T0tzikTvnZrkcw05TOw'
const host = process.env.HOST || 'serverless.crkauhfw6pgc.us-east-1.rds.amazonaws.com'
const dialect = process.env.DB_CONNECTION || 'mysql'

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