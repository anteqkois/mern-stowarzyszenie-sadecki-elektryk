const express = require('express');
const router = express.Router();

const categoriesControllers = require('../controllers/categoriesController');
const { catchAsyncErrors } = require('../middlewares/errors');

//GET
router.get('/', catchAsyncErrors(categoriesControllers.findAll));

router.get('/:id', catchAsyncErrors(categoriesControllers.findOne));

//POST
router.post('/', catchAsyncErrors(categoriesControllers.create));

//PUT
router.put('/:id', catchAsyncErrors(categoriesControllers.update));

//DELETE
router.delete('/:id', catchAsyncErrors(categoriesControllers.remove));

module.exports = router;
