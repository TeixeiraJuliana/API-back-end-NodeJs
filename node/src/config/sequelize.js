const {Sequelize} = require('sequelize')


const sequelize = new Sequelize("user_registration","root",  "123456" ,{
  host: 'localhost',
  dialect: 'mysql'
})

 sequelize.authenticate().then(() => {console.log('Conexão realizada com sucesso')}).catch(() =>{ console.log('fracasso')})


module.exports = sequelize;