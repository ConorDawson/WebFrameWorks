const mongoose = require('mongoose');





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

module.exports = {User};
