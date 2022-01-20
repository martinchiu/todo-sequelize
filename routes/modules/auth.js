const express = require('express')
const router = express.Router()

const authController = require('../../services/authController')
// 向 Facebook 發出請求
router.get('/facebook', authController.facebook)

// Facebook 把資料發回來
router.get('/facebook/callback', authController.facebookCallback)

module.exports = router