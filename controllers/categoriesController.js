const database = require('../config/database');
const Category = require('../models/category');
const { createApiError } = require('../middlewares/errors');


const findAll = async (req, res, next) => {
    const category = await Category.find();
    !category && next(createApiError(`Didn't find a categories`, 404));
    return res.status(200).send(category);
};
const findOne = async (req, res, next) => {
    const category = await Category.findOne({
      _id: req.params.id,
    });
    console.log('TEST')
    !category && next(createApiError(`Didn't find a category`, 404));
    return res.status(200).send(category);
};

const create = async (req, res) => {
    const category = await new Category({
      category: req.body.category,
    }).save();
    return res
      .status(201)
      .send({ data: category, message: 'New category was created' });
};
const update = async (req, res, next) => {
    const category = await Category.findOne({
      _id: req.params.id,
    });
    !category && next(createApiError(`Didn't find category to update`, 404));

    category.category = req.body.category ? req.body.category : category.category;

    await category.save()
    return res
      .status(200)
      .send({ data: category, message: 'Category was updated' });
};

const remove = async (req, res, next) => {

  const category = await Category.deleteOne({
    _id: req.params.id,
  });

  !category.ok && next(createApiError('Something went wrong !', 500));
  !category.deletedCount && next(createApiError(`Didn't find a category to delet !`, 404));

  return res
    .status(200)
    .send({ message: 'Category was deleted' });
};

module.exports = { findAll, findOne, create, update, remove };
