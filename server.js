const express = require('express'); // Import the Express library
const app = express(); // Create an instance of an Express application
const port = process.env.PORT || 3000; // Set the port to the environment variable PORT, or 3000 if not set

const mongoose = require('mongoose'); // Import the Mongoose library
const Task = require('./api/models/todoListModel'); // Import the Task model (from our todoListModel file)
const bodyParser = require('body-parser'); // Import the body-parser library

// Mongoose instance connection URL connection
mongoose.Promise = global.Promise; // Set mongoose to use global promises
mongoose.connect('mongodb://localhost/Tododb'); // Connect to the MongoDB database using the provided URL

app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser to parse URL-encoded bodies
app.use(bodyParser.json()); // Use body-parser to parse JSON bodies

const routes = require('./api/routes/todoListRoutes'); // Import the routes for the todo list
routes(app); // Register the routes with the app

app.listen(port); // Make the app listen for incoming requests on the specified port

console.log('todo list RESTful API server started on: ' + port); // Log a message to the console to indicate the server is running
