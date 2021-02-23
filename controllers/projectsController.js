const database = require('../config/database');
const Project = require('../models/project');
const { createError } = require('../middlewares/errors');

const findAll = async (req, res, next) => {
  const data = await Project.find().populate('category', 'category');
  if (!data) next(createError(`Didn't find a projects`, 404));
  req.data = data;
  return res.status(200).send(data);
};

const findOne = async (req, res, next) => {
  const data = await Project.findOne({
    slug: req.params.slug,
  }).populate('category', 'category');
  if (!data) next(createError(`Didn't find a project`, 404));
  req.data = data;
  return res.status(200).send(data);
};

const create = async (req, res) => {
  const project = await new Project({
    title: req.body.title,
    category: req.body.category,
    date: req.body.date,
    description: req.body.description,
  }).save();
  return res
    .status(201)
    .send({ data: project, message: 'New project was created' });
};

const update = async (req, res, next) => {
  let project = await Project.findOne({
    slug: req.params.slug,
  });

  if (!project) next(createError(`Didn't find project to update`, 404));

  project.category = req.body.category ? req.body.category : project.category;
  project.title = req.body.title ? req.body.title : project.title;
  project.date = req.body.date ? req.body.date : project.date;
  project.description = req.body.description ? req.body.description : project.description;

  await project.save();

  return res
    .status(200)
    .send({ data: project, message: 'Project was updated' });
};

const remove = async (req, res, next) => {
  const project = await Project.deleteOne({
    slug: req.params.slug,
  });

  if (!project.ok) next(createError('Something went wrong !', 500));
  if (!project.deletedCount) next(createError(`Didn't find a project to delet !`, 404));
  return res
    .status(200)
    .send({ message: 'Project was deleted' });
};

module.exports = { findAll, findOne, create, update, remove };