const express = require('express')
const router = express.Router()

const todosController = require('../../services/todosController')

// 新增
router.get('/new', todosController.new)
router.post('/', todosController.postNew)
// 瀏覽
router.get('/:id', todosController.detail)
// 修改
router.get('/:id/edit', todosController.edit)
router.put('/:id', todosController.putEdit)
// 刪除
router.delete('/:id', todosController.delete)

module.exports = router
