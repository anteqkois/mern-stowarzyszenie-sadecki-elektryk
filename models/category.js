const mongoose = require('mongoose');

const Category = mongoose.Schema({
  category: String,
});

module.exports = mongoose.model('Category', Category);
