const Sequelize = require( 'sequelize')
const dataBases = require('../config/sequelize')

const User =  dataBases.define('registered_user', {

    codigo: {
        type: Sequelize.INTEGER, 
        allowNull:true, 
        autoIncrement: true, 
        primaryKey: true, 
    }, 
    nome: {
        type: Sequelize.STRING
    }, 
    data_nascimento: {
        type: Sequelize.DATE
    },
    imagem: {
        type: Sequelize.BLOB
    },

},{
    timestamps: false
}); 
User.sync()

module.exports = User; 