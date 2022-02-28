const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("user_registration","root",  "123456" ,{
  host: 'localhost',
  dialect: 'mysql'
})
sequelize.authenticate().then(() => {console.log('Conexão realizada com sucesso')}).catch(() =>{ console.log('Por favor entre em contato com o administrador desta aplicação')})
module.exports = sequelize;