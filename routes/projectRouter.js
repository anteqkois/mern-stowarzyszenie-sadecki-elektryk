const express = require('express');
const router = express.Router();

const projectControllers = require('../controllers/projectsController');
const { catchAsyncErrors } = require('../middlewares/errors');

//GET
router.get('/', catchAsyncErrors(projectControllers.findAll));

router.get('/:slug', catchAsyncErrors(projectControllers.findOne));

//POST
router.post('/', catchAsyncErrors(projectControllers.create));

//PUT
router.put('/:slug', catchAsyncErrors(projectControllers.update));

//DELETE
router.delete('/:slug', catchAsyncErrors(projectControllers.remove));

module.exports = router;
