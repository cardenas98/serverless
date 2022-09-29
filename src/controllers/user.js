const { matchedData } = require('express-validator')
const { encrypt } = require('./../utils/handlePassword')
const Users = require('./../models/users')

const { handleError } = require('./../utils/handleError')


class UserController {

    /**
     * 
     * @param {*} req 
     * @param {*} res
     * @return {Object} Ultimo valor creado
     */

    createUser = async (req, res) => {

        try{

            req = matchedData(req)

            const password = await encrypt(req.password)

            const body = {...req, password}

            const dataUser = await Users.create(body)

            dataUser.set('password', undefined, { strict: false })

            const data = { dataUser }

            res.send({data})

        }catch(e){

            console.log(e)

            handleError(res, '**** ERROR *****')

        }

    }

    /**
     * 
     * @param {*} req 
     * @param {*} res
     * @return {Object} Listado de datos
     */

    getUser = async (req, res) => {

        try{

            req = matchedData(req)

            const data = await Users.findAll()

            data.forEach( element => {

                return element.set('password', undefined, { strict: false })

            })

            res.send(data)

        }catch(e){

            console.log(e)

            handleError(res, '**** ERROR *****')

        }

    }

}

module.exports = { UserController }