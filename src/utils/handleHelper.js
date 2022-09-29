const axios = require('axios').default;
const { handleError } = require('./../utils/handleError');

/**
 * @class
 * @classdesc Funciones de apoyo
*/

class handleHelper {

    constructor(req, res){

        this.req = req
        this.res = res
        this.url = 'https://swapi.py4e.com/api'

    }

    petition = async (baseURL) => {
        try {

            const instance = axios.create({
                baseURL,
                headers: {"Content-Type": "application/json"}
            });

            const response = await instance.get();

            return response;

        } catch (e) {

            console.log({'error' : e})
            handleError(this.res, 'ERROR CONEXIÓN API REST')

        }
    }

    /**
     * @returns {object} - arreglo entradas
    */
    getAllEntries= async (controller) => {

        const baseURL = `${this.url}/${controller}`;

        const response = await this.petition(baseURL);

        return response.data

   }

   getIdEntries= async (controller = '', id) => {

        const baseURL = `${this.url}/${controller}/${id}`;

        const response = await this.petition(baseURL);

        return response.data

    }

    getSearchEntries= async (controller, search, value) => {

        const baseURL = `${this.url}/${controller}/?${search}=${value}`;

        const response = await this.petition(baseURL);

        return response.data

    }

}

module.exports = handleHelper