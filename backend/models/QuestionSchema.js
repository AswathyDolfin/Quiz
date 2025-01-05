const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: String,
  options: [String],
  correctIndex: Number,
  explanation: String,
});

module.exports = mongoose.model('Question', questionSchema);
