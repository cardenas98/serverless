const { sequelize } = require('./../config/database')
const { DataTypes } = require('sequelize')

/**
 * 
 * @class
 */

const Users = sequelize.define(
    'users',
    {
        name: { 
            type: DataTypes.STRING 
        },
        password: { 
            type: DataTypes.STRING 
        }

    },{
        timestamps: true 
    }

)

module.exports = Users