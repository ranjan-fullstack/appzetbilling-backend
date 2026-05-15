function notFound(req, res) {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  })
}

function errorHandler(err, req, res) {
  const statusCode = err.statusCode || 500

  if (process.env.NODE_ENV !== 'test') {
    console.error(err)
  }

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? 'Internal server error' : err.message,
  })
}

module.exports = { errorHandler, notFound }
