const express = require('express')

const routerUser  = require('../routes/user')

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Aplicação esta online')
  })

router.use('/user', routerUser)

module.exports = router