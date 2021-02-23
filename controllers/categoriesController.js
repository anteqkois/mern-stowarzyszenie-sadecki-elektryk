const database = require('../config/database');
const Category = require('../models/category');
const { catchAsyncErrors } = require('../middlewares/errors');

const findOne = async (req, res) => {
  try {
    const { category } = await Category.findOne({
      _id: req.params.id,
    });
    return res.status(200).send({ category });
  } catch (error) {
    console.log(error);
  }
};

const searchName = async (req, res, next) => {
  const { data } = req;
  //if(!data) return next();

  const category = await Category.findOne({
    _id: data.category,
  });
  if (!category) throw new Error(`Didn't find category of project`);
  data.category = category;
  return res.status(200).send(data);
};

const searchNameAll = async (req, res, next) => {
  const { data } = req;

  const asyncForEach = async () => {
    for await (const element of data) {
      const category = await Category.findOne({
        _id: element.category,
      });
      if (!category) throw new Error(`Didn't find category of project`);
      element.category = category;
    }
    return res.status(200).send(data);
  };
  asyncForEach().catch((err) => {
    next(err);
  });
};

module.exports = { findOne, searchName, searchNameAll };
