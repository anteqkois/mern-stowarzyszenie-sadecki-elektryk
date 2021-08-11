const express = require('express');
const router = express.Router();

const categoriesControllers = require('../controllers/categoriesController');
const { catchAsyncErrors } = require('../middlewares/errors');
const { authenticate } = require('../middlewares/authenticate');

//GET
router.get('/', catchAsyncErrors(categoriesControllers.findAll));

router.get('/:id', catchAsyncErrors(categoriesControllers.findOne));

//POST
router.post(
  '/',
  authenticate,
  catchAsyncErrors(categoriesControllers.create),
);

//PUT
router.put(
  '/:id',
  authenticate,
  catchAsyncErrors(categoriesControllers.update),
);

//DELETE
router.delete(
  '/:id',
  authenticate,
  catchAsyncErrors(categoriesControllers.remove),
);

module.exports = router;
