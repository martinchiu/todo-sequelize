const db = require('../models')
const Todo = db.Todo

module.exports = {
  home: (req, res) => {
    const UserId = req.user.id
    return Todo.findAll({
      where: { UserId },
      raw: true,
      nest: true
    })
      .then((todos) => { return res.render('index', { todos }) })
      .catch((error) => { return res.status(422).json(error) })
  }
}