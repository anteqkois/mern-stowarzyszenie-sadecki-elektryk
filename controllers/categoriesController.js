const mongoose = require('mongoose');
const database = require('../config/database');
const Category = require('../models/category');
const { createApiError } = require('../middlewares/errors');

const findAll = async (req, res, next) => {
  const category = await Category.find();
  !category && next(createApiError(`Nie znaleziono kategorii`, 404));
  return res.status(200).send(category);
};
const findOne = async (req, res, next) => {
  // console.log('TEST');
  !mongoose.Types.ObjectId.isValid(req.params.id) &&
    next(createApiError(`Nie znaleziono kategorii`, 404));

  const category = await Category.findOne({
    _id: req.params.id,
  });
  !category && next(createApiError(`Didn't find a category`, 404));
  return res.status(200).send(category);
};

const create = async (req, res, next) => {
  !req.body.category && next(createApiError(`Brak nazwy kategorii`, 422));

  const category = await new Category({
    category: req.body.category,
  }).save();
  return res
    .status(201)
    .send({ data: category, message: 'Nowa kategoria została stworzona' });
};

const update = async (req, res, next) => {
  const category = await Category.findOne({
    _id: req.params.id,
  });
  !category &&
    next(createApiError(`Nie znaleziono kategorii do aktualizacji`, 404));

  category.category = req.body.category ? req.body.category : category.category;

  await category.save();
  return res
    .status(200)
    .send({ data: category, message: 'Kategoria została zaktualizowana' });
};

const remove = async (req, res, next) => {
  !mongoose.Types.ObjectId.isValid(req.params.id) &&
    next(createApiError(`Nie znaleziono kategorii do usunięcia`, 404));
  
  const category = await Category.deleteOne({
    _id: req.params.id,
  });

  !category.ok &&
    next(
      createApiError(
        'Niestety coś poszło nie tak po stronie serwera ! :(',
        500,
      ),
    );
  !category.deletedCount &&
    next(createApiError(`Nie znaleziono kategorii do usunięcia !`, 404));

  return res.status(200).send({ message: 'Kategoria została usunięta' });
};

module.exports = { findAll, findOne, create, update, remove };
