 
const express = require('express');
const routers = require('./src/controlers');
const app = express();

const db = require('./src/config/sequelize');

const User = require('./src/models/userTable');

app.use(express.json())
app.use('/', routers)

app.listen(3000, () => {
  console.log('Seja bem vindo!')
})



 