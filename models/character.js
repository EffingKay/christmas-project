const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  show: { type: String, trim: true},
  name: { type: String, trim: true  },
  quote: { type: String, trim: true },
  reason: { type: String, trim: true },
  image: { type: String, trim: true }
});

module.exports = mongoose.model('Character', characterSchema);
