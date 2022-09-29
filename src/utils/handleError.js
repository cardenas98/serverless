
/**
 * @description Apoyo con los errores del programa.
 * @param {*} res impresion
 * @param {*} message mensaje a imprimir y detectar en que parte del codigo da error
 * @param {*} code codigo de error 
 * @returns {object} retirna un objeto mostrando el error
 */

const handleError = (res, message = 'Algo salió mal, Error de servidor', code = 403) => {

    res.setHeader('Last-Modified',(new Date()).toUTCString())

    res.status(code).json({ error: message })

}

module.exports = { handleError }