const Todo = require('../models/todoModel');

exports.listAllTodos = (req, res) => {
  Todo.find({}, (err, todo) => {
    if(err) {
      res.status(500).send(err);
    }
    res.status(200).json(todo);
  })
}

exports.createNewTodo = (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save((err, todo) => {
    if(err) {
      res.status(500).send(err);
    }
    res.status(201).json(todo);
  });
}

exports.updateTodo = (req, res) => {
  Todo.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    { new: true },
    (err, todo) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(todo);
    }
  )
}

exports.deleteTodo = async((req, res) => {
  await Todo.deleteOne(
    {
      _id: req.params.id      
    },
    (err) => {
      if(err) {
        return res.status(404).send(err);
      }
      res.status(200).json({
        message: "Todo successfully deleted"
      });
    }
  );
})