const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

const Project = mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  title: {
    type: String,
    required: true,
    maxLength: 60,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 1100,
  },
});

Project.plugin(
  URLSlugs('title', { field: 'slug'}),
);

module.exports = mongoose.model('Project', Project);
