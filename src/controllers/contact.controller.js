const Contact = require('../models/contact.model')
const asyncHandler = require('../utils/asyncHandler')

const createContact = asyncHandler(async (req, res) => {
  const contact = await Contact.create(req.body)

  res.status(201).json({
    success: true,
    message: 'Contact message received',
    data: { id: contact._id },
  })
})

module.exports = { createContact }
