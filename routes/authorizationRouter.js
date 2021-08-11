const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { catchAsyncErrors, createApiError } = require('../middlewares/errors');

const loginUser = async (req, res, next) => {
  const { login, password } = req.body;

  if (login === process.env.LOGIN && password === process.env.PASSWORD) {
    const accessToken = jwt.sign({ login: login }, process.env.TOKEN_SECRET, {
      expiresIn: 3600,
    });

    const refreshToken = jwt.sign(
      { login: login },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: 43200,
      },
    );

    res.cookie('JWT' , accessToken, {
      maxAge: 86400000,
      httpOnly: true,
    })

    return res.status(200).send({ accessToken, refreshToken });
  }
  next(createApiError(`Nie poprawny login lub hasło`, 404));
};

const refreshToken = async (req, res, next) => {
  // Nie potrzebna funkcja przy tej skali projektu (lepiej czas przeznaczyć na coś innego) 
};

//POST
router.post('/login', catchAsyncErrors(loginUser));

module.exports = router;
