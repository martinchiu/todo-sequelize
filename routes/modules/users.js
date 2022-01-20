const express = require('express')
const router = express.Router()

const usersController = require('../../services/usersController')

router.get('/login', usersController.login)

router.post('/login', usersController.postLogin)

router.get('/register', usersController.register)

router.post('/register', usersController.postRegister)

router.get('/logout', usersController.logout)

module.exports = router
