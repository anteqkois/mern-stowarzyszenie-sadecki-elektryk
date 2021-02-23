const express = require('express');
const router = express.Router();

const projectControllers = require('../controllers/projectsController');
const categoriesControllers = require('../controllers/categoriesController');
const { catchAsyncErrors } = require('../middlewares/errors');

//GET
router.get(
  '/projects',
  catchAsyncErrors(projectControllers.findAll),
  catchAsyncErrors(categoriesControllers.searchNameAll),
);

router.get(
  '/projects/:slug',
  catchAsyncErrors(projectControllers.find),
  catchAsyncErrors(categoriesControllers.searchName),
);

//POST
router.post('/projects', projectControllers.create);

//PUT
router.put('/projects/:slug', catchAsyncErrors(projectControllers.update));

//DELETE
router.delete('/projects/:slug', projectControllers.remove);

module.exports = router;
