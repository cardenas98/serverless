const express = require('express')

const router = express.Router()

/**
 * @method GET
 * @return {object} Devuelve estado de la aplicación
 */

router.get('/', function(req, res, next) {

    res.setHeader('Last-Modified',(new Date()).toUTCString())
    res.status(200).json({
        name: "Estado",
        http_status: "200",
        status: "available",
        cache_control: "no-cache",
        last_update: (new Date())
    });
});

module.exports = router