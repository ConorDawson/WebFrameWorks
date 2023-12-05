const mongoose = require('mongoose');

// Define the duck schema
const duckSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  accid: String,
  name: String,
  features: [String],
  hobbies: [String],
}, { collection: 'Users_Ducks' }); // Specify the collection name here

const Duck = mongoose.model('Duck', duckSchema);

module.exports = Duck;
