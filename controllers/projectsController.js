const database = require('../config/database');
const Project = require('../models/project');
const { createApiError } = require('../middlewares/errors');

const findAll = async (req, res, next) => {
  const data = await Project.find().populate('category', 'category');
  !data && next(createApiError(`Nie znaleziono projektów w bazie`, 404));
  req.data = data;
  return res.status(200).send(data);
};

const findOne = async (req, res, next) => {
  const data = await Project.findOne({
    slug: req.params.slug,
  }).populate('category', 'category');

  !data &&
    next(
      createApiError(
        `Nie znaleziono projektu w bazie po slugu: ,,${req.params.slug}''`,
        404,
      ),
    );
  req.data = data;
  return res.status(200).send(data);
};

const create = async (req, res, next) => {
  !req.body.title && next(createApiError(`Brak wymaganego pola: tytuł`, 422));
  !req.body.category &&
    next(createApiError(`Brak wymaganego pola: kategoria`, 422));
  !req.body.date && next(createApiError(`Brak wymaganego pola: data`, 422));
  !req.body.description &&
    next(createApiError(`Brak wymaganego pola: opis`, 422));

  const project = await new Project({
    title: req.body.title,
    category: req.body.category,
    date: req.body.date,
    description: req.body.description,
  }).save();
  return res.status(201).send({ data: project });
};

const update = async (req, res, next) => {
  let project = await Project.findOne({
    slug: req.params.slug,
  });

  !project &&
    next(
      createApiError(
        `Nie znaleziono projektu w bazie po slugu: ,,${req.params.slug}'' do aktualizacji`,
        404,
      ),
    );
  
    (!req.body.category ||
      !req.body.title ||
      !req.body.date ||
      !req.body.description) &&
      next(
        createApiError(
          `Projekt został zaatualizowany, jednak brakujace pola pozostały bez zmian w stosunku do poprzedniej wersji!`,
          422,
        ),
      );

  project.slug = req.body.slug ? req.body.slug : project.slug;
  project.category = req.body.category ? req.body.category : project.category;
  project.title = req.body.title ? req.body.title : project.title;
  project.date = req.body.date ? req.body.date : project.date;
  project.description = req.body.description
    ? req.body.description
    : project.description;

  await project.save();

  return res.status(200).send({ data: project });
};

const remove = async (req, res, next) => {
  const project = await Project.deleteOne({
    slug: req.params.slug,
  });

  //if (!project.ok) next(createError('Something went wrong !', 500));
  !project.deletedCount &&
    next(
      createApiError(
        `Nie znaleziono projektu w bazie po slugu: ,,${req.params.slug}'' do usunięcia`,
        404,
      ),
    );
  return res.status(200).send({ message: 'Project was deleted' });
};

module.exports = { findAll, findOne, create, update, remove };
