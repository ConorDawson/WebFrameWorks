const mongoose = require('mongoose');

// Define the duck schema
const duckSchema = new mongoose.Schema({
  name: String,
  features: [String],
  hobbies: [String],
  duckid: String,
}, { collection: 'Users_Ducks' }); // Specify the collection name here

const Duck = mongoose.model('Duck', duckSchema,'Users_Ducks');

module.exports = Duck;
