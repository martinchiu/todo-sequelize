const db = require('../models')
const Todo = db.Todo
const User = db.User

module.exports = {
  new: (req, res) => {
    res.render('new')
  },
  postNew: (req, res) => {
    const UserId = req.user.id
    const name = req.body.name // 從 req.body 拿出表單裡的 name 資料

    return Todo.create({ name, UserId }) // 存入資料庫
      .then(() => res.redirect('/')) // 新增完成後導回首頁
      .catch(error => console.log(error))
  },
  detail: (req, res) => {
    const id = req.params.id
    return Todo.findByPk(id)
      .then(todo => res.render('detail', { todo: todo.toJSON() }))
      .catch(error => console.log(error))
  },
  edit: (req, res) => {
    const UserId = req.user.id
    const id = req.params.id

    return Todo.findOne({ where: { id, UserId } })
      .then(todo => res.render('edit', { todo: todo.toJSON() }))
      .catch(error => console.log(error))
  },
  putEdit: (req, res) => {
    const UserId = req.user.id
    const id = req.params.id
    const { name } = req.body
    const isDone = req.body.isDone === 'on'
    return Todo.findOne({ where: { id, UserId } })
      .then(todo => {
        todo.update({ isDone, name })
      })
      .then(() => res.redirect(`/todos/${id}`))
      .catch(error => console.log(error))
  },
  delete: (req, res) => {
    const UserId = req.user.id
    const id = req.params.id

    return Todo.destroy({ where: { id, UserId } })
      .then(() => res.redirect('/'))
      .catch(error => console.log(error))
  }
}