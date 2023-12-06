const mongoose = require('mongoose');

// Define the duck schema
const duckSchema = new mongoose.Schema({
  name: String,
  features: [String],
  hobbies: [String],
  duckid: String,
}, { collection: 'Users_Ducks' }); // Specify the collection name here

const Duck = mongoose.model('Duck', duckSchema,'Users_Ducks');

const userSchema = new mongoose.Schema({
  forename: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { collection: 'User' });

// Create models for Duck and User schemas

const User = mongoose.model('User', userSchema);

module.exports = {Duck, User};
