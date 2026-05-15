const Newsletter = require('../models/newsletter.model')
const asyncHandler = require('../utils/asyncHandler')

const subscribeNewsletter = asyncHandler(async (req, res) => {
  const subscription = await Newsletter.findOneAndUpdate(
    { email: req.body.email },
    { email: req.body.email },
    { new: true, upsert: true, setDefaultsOnInsert: true },
  )

  res.status(201).json({
    success: true,
    message: 'Newsletter subscription saved',
    data: { id: subscription._id },
  })
})

module.exports = { subscribeNewsletter }
