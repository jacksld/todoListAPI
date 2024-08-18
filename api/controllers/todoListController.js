const mongoose = require('mongoose'); // Import the Mongoose library
const Task = mongoose.model('Tasks'); // Get the Task model from Mongoose

// Function to list all tasks
exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) { // Find all tasks in the database
    if (err) { // If there's an error
      res.send(err); // Send the error message
    }
    res.json(task); // Send the list of tasks as a JSON response
  });
};

// Function to create a new task
exports.create_a_task = function(req, res) {
  const new_task = new Task(req.body); // Create a new task with the data from the request body
  new_task.save(function(err, task) { // Save the new task to the database
    if (err) { // If there's an error
      res.send(err); // Send the error message
    }
    res.json(task); // Send the newly created task as a JSON response
  });
};

// Function to read a task by ID
exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) { // Find a task by its ID
    if (err) { // If there's an error
      res.send(err); // Send the error message
    }
    res.json(task); // Send the found task as a JSON response
  });
};

// Function to update a task
exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate(
    { _id: req.params.taskId }, // Find the task by its ID
    req.body, // Update the task with the new data from the request body
    { new: true }, // Return the updated task
    function(err, task) { // Callback function to handle the result
      if (err) { // If there's an error
        res.send(err); // Send the error message
      }
      res.json(task); // Send the updated task as a JSON response
    }
  );
};

// Function to delete a task
exports.delete_a_task = function(req, res) {
  Task.remove(
    { _id: req.params.taskId }, // Find the task by its ID
    function(err, task) { // Callback function to handle the result
      if (err) { // If there's an error
        res.send(err); // Send the error message
      }
      res.json({ message: 'Task successfully deleted' }); // Send a success message as a JSON response
    }
  );
};
