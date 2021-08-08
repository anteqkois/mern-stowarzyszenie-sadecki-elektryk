const express = require('express');
const router = express.Router();
const {catchAsyncErrors, createApiError } = require('../middlewares/errors');



const autherizationUser = async (req, res, next) => {
  
  const {login, password} = req.body;

  if(login === process.env.LOGIN && password === process.env.PASSWORD){
    
    
    return res.status(200).send('Poprawne hasło i login');
  }

  // console.log( email, password);
  
  // const data = await Project.find().populate('category', 'category');
  next(createApiError(`Nie poprawny login lub hasło`, 404));
  // req.data = data;
  //return res.status(200).send('ok');
};

//POST
router.post('/', catchAsyncErrors(autherizationUser));

module.exports = router;