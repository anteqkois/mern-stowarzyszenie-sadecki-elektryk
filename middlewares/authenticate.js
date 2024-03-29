const { createApiError } = require('../middlewares/errors');
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  // console.log(req.headers)

  // const authHeader = req.headers['Authorization'];
  // const token = authHeader && authHeader.split(' ')[1];
  
  const token = req.cookies.JWT;

  (token === null || token === undefined) &&
    next(createApiError(`Brak wymaganej autoryzacji użytkownika`, 401));

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    err && next(createApiError(`Brak wymaganej autoryzacji użytkownika`, 403));

    req.user = user;
    next();
  });
};

module.exports = {
  authenticate,
};
