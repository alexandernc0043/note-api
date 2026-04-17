function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  console.log(err.message);
  res.status(status).json({
    error: err.message || 'Internal Server Error',
  });
}

export default errorHandler;
