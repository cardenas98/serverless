const awsServerlessExpress = require('aws-serverless-express');

const { healtcheck, getSwapi, getIdSwapi, createUser, getUser } = require('./src/app')

/**
 * 
 * @export {healtcheck} 
 * @return {object} Verifica el estado de la aplicación
 */

const serverHealtcheck = awsServerlessExpress.createServer(healtcheck);

module.exports.healtcheck = (event, context) => {

  return awsServerlessExpress.proxy(serverHealtcheck, event, context);

}

/**
 * 
 * @export {getSwapi}
 * @return {object} Devuelve los datos de la API SWAPI
 */
const serverGetSwapi = awsServerlessExpress.createServer(getSwapi);

module.exports.getSwapi = (event, context) => {

  return awsServerlessExpress.proxy(serverGetSwapi, event, context);

}

/**
 * 
 * @export {getSearchSwapi}
 * @return {object} Devuelve los valores segun el tipo de búsqueda
 */

const serverGetSearchSwapi = awsServerlessExpress.createServer(getIdSwapi);

module.exports.getSearchSwapi = (event, context) => {

  return awsServerlessExpress.proxy(serverGetSearchSwapi, event, context);

}


/**
 * 
 * @export {createUser}
 * @return {object} Crea y devuelve el usuario registrado
 */

const serverCreateUser = awsServerlessExpress.createServer(createUser);

module.exports.createUser = (event, context) => {

  return awsServerlessExpress.proxy(serverCreateUser, event, context);

}


/**
 * 
 * @export {getUser}
 * @return {object} Devuelve los usuarios registrados
 */
const serverGetUser = awsServerlessExpress.createServer(getUser);

module.exports.getUser = (event, context) => {

  return awsServerlessExpress.proxy(serverGetUser, event, context);

}