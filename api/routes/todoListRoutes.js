module.exports = function(app) { // Export this function so it can be used in other parts of the app
  const todoList = require('../controllers/todoListController'); // Import the todoListController

  // Define the routes for handling tasks

  // Route for '/tasks'
  app.route('/tasks')
    .get(todoList.list_all_tasks) // When a GET request is made to '/tasks', call the list_all_tasks function
    .post(todoList.create_a_task); // When a POST request is made to '/tasks', call the create_a_task function

  // Route for '/tasks/:taskId'
  app.route('/tasks/:taskId')
    .get(todoList.read_a_task) // When a GET request is made to '/tasks/:taskId', call the read_a_task function
    .put(todoList.update_a_task) // When a PUT request is made to '/tasks/:taskId', call the update_a_task function
    .delete(todoList.delete_a_task); // When a DELETE request is made to '/tasks/:taskId', call the delete_a_task function
};
