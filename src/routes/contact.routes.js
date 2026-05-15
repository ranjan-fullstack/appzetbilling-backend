const express = require('express')
const { z } = require('zod')
const { createContact } = require('../controllers/contact.controller')
const validate = require('../middleware/validate')

const router = express.Router()

const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.email(),
  phone: z.string().max(30).optional(),
  company: z.string().max(120).optional(),
  message: z.string().min(10).max(1000),
})

router.post('/', validate(contactSchema), createContact)

module.exports = router
