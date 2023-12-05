const mongoose = require('mongoose');

const duckSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  accid: String,
  name: String,
  features: [String],
  hobbies: [String]
});

const Duck = mongoose.model('Duck', duckSchema);

module.exports = Duck;
