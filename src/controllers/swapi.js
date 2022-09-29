const { matchedData } = require('express-validator')
const { handleError } = require('./../utils/handleError')
const handleHelper = require('./../utils/handleHelper')

class swapiController {

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns {object} Lista todo el contenido de Personas
     */

    getAll = async (req, res) => {

        try{
            req = matchedData(req)

            let { name } = req

            name = (name === 'root') ? '' : name;

            const response = await new handleHelper(req, res).getAllEntries(name);

            res.send(response)

        }catch (e) {

            console.log(e)

            handleError(res, '**** ERROR *****')

        }

    }

    /**
     * 
     * @param {*} req 
     * @param {*} res
     * @return {object} Valor de Busqueda segun tipo 
     */
    getId = async (req, res) => {

        try{

            req = matchedData(req)

            let { name, id } = req

            let response = 'ACCION NO VALIDA'

            const validSearch = name.indexOf('_')

            let search = ''
            let modulo = ''

            if(validSearch >= 0){

                modulo = name.split('_').shift()
                search = name.split('_').pop()

            }

            if(modulo !== 'root'){

                if(validSearch >= 0){

                    response = await new handleHelper(req, res).getSearchEntries(modulo, search, id);
    
                }else{

                    response = await new handleHelper(req, res).getIdEntries(name, id);

                }

            }


            res.send(response)

        }catch (e) {

            console.log(e)

            handleError(res, '**** ERROR *****')

        }

    }

}

module.exports = { swapiController }