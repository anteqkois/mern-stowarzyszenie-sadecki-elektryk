const express = require('express');
const router = express.Router();

const projectControllers = require('../controllers/projectsController');
const { catchAsyncErrors } = require('../middlewares/errors');
const { authenticate } = require('../middlewares/authenticate');

//GET
//router.get('/error', catchAsyncErrors(projectControllers.error));
router.get('/', catchAsyncErrors(projectControllers.findAll));

router.get('/:slug', catchAsyncErrors(projectControllers.findOne));

//POST
router.post('/', authenticate, catchAsyncErrors(projectControllers.create));

//PUT
router.put('/:slug', authenticate,catchAsyncErrors(projectControllers.update));

//DELETE
router.delete('/:slug', authenticate, catchAsyncErrors(projectControllers.remove));

module.exports = router;
