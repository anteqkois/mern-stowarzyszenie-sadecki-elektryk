const mongoose = require('mongoose');

const Category = mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Category', Category);
