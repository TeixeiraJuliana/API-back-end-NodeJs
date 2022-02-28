const express = require('express');
const router = express.Router();
const User  = require('../models/userTable');
const ServicesUser = require('../services/servicesUser')

const userService = new ServicesUser(User)

router.get('/', async (req, res) => {
    const users = await userService.getUser()
    res.json(users)
});

router.post('/', async (req, res) => {
    const {codigo, nome,  data_nascimento, imagem} = req.body
    await userService.CreateUser({codigo, nome,  data_nascimento, imagem})
    res.status('Novo usuario adicionado com sucesso')
})

module.exports = router

