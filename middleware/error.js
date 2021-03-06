const errorHandler = (err, req, res, next) => {
  // Logt to console for dev
  console.log(err.stack.red);

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Server Error",
  });
};

module.exports = errorHandler;
