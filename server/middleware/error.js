const ErrorResponse = require('../utils/errorResponse');

/* eslint-disable */
const errorHandler = (err, req, res, next) => {
  /* eslint-enable */
  let error = { ...err };

  error.message = err.message;

  // Log to console for dev
  console.log(err.stack);

  // Mongoose bad Object ID
  if (err.name === 'CastError') {
    const message = `User not found with ID of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'Server Error' });
};

module.exports = errorHandler;
