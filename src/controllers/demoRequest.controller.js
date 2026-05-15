const DemoRequest = require('../models/demoRequest.model')
const asyncHandler = require('../utils/asyncHandler')

const createDemoRequest = asyncHandler(async (req, res) => {
  const demoRequest = await DemoRequest.create(req.body)

  res.status(201).json({
    success: true,
    message: 'Demo request submitted',
    data: { id: demoRequest._id },
  })
})

module.exports = { createDemoRequest }
