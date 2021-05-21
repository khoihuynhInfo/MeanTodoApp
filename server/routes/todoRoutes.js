'use strict'

module.exports = function(app) {
  const todoList = require('../controllers/todoController');

  app
    .route("/todos")
    .get(todoList.listAllTodos)
    .post(todoList.createNewTodo);

  app
    .route("/todo/:id")
    .put(todoList.updateTodo)
    .post(todoList.deleteTodo);
}