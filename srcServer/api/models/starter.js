const mongoose = require('mongoose');

const StarterSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

module.exports = mongoose.model('Starter', StarterSchema);
