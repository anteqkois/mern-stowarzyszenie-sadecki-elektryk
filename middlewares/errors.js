const { findById } = require('../models/project');

const notFound = (req, res, next) => {
  const err = new Error('404 api endpoint not found');
  err.status = 404;
  next(err);
};


const catchAsyncErrors = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      //console.log(err);
      next(err);
    });
  };
};

const catchErrors = (err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message || `Something did wrong :(`,
  });
  next();
};

module.exports = { notFound, catchAsyncErrors, catchErrors };
