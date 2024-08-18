const mongoose = require('mongoose'); // Import the Mongoose library
const Schema = mongoose.Schema; // Get the Schema constructor from Mongoose

// Create a new schema for tasks
const TaskSchema = new Schema({
  // Define the "name" field
  name: {
    type: String, // The name should be a string
    // This field is required, and this message will show if it's missing
	required: 'Kindly enter the name of the task' 
  },
  // Define the "Created_date" field
  Created_date: {
    type: Date, // The created date should be a date
    default: Date.now // If no date is provided, use the current date
  },
  // Define the "status" field
  status: {
    type: [{
      type: String, // The status should be a string
      enum: ['pending', 'ongoing', 'completed'] // The status can only be one of these values
    }],
    default: ['pending'] // If no status is provided, default to 'pending'
  }
});

// Export the model so it can be used in other parts of the app
module.exports = mongoose.model('Tasks', TaskSchema);
