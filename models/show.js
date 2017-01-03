const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
  image: { type: String, trim: true, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Show', showSchema);
