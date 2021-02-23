const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

const Project = mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  title: {
    type: String,
    maxLength: 60,
  },
  date: Date,
  description: {
    type: String,
    maxLength: 1100,
  },
});

Project.plugin(
  URLSlugs('title', {
    field: 'slug',
  }),
);

module.exports = mongoose.model('Project', Project);
