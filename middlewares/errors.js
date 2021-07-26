const notFound = (req, res, next) => {
  const err = new Error('404 api endpoint not found');
  err.status = 404;
  next(err);
};

const catchAsyncErrors = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      next(err);
    });
  };
};

const createError = (message, status) => {
  const err = new Error(message);
  err.status = status;

  throw err;
};

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}
const createApiError = (message, status) => {
  const err = new ApiError(message, status);
  throw err;
};

const catchErrors = (err, req, res, next) => {
  //console.log(err.name, err.status, err.message);

  return res
    .status(err.status || 500)
    .send(err.message);
    // .send(err.message || `Something did wrong :(`);
  next();
};

// const catchErrors = (err, req, res, next) => {

//   return res.status(err.status || 500).send({
//     data: err.message || `Something did wrong :(`,
//   });
//   next();
// };

module.exports = {
  notFound,
  catchAsyncErrors,
  createError,
  createApiError,
  catchErrors,
};
