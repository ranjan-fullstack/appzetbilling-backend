const express = require('express')
const { z } = require('zod')
const { createDemoRequest } = require('../controllers/demoRequest.controller')
const validate = require('../middleware/validate')

const router = express.Router()

const demoRequestSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.email(),
  phone: z.string().min(7).max(30),
  businessType: z.string().min(2).max(80),
  preferredDate: z.coerce.date().optional(),
  notes: z.string().max(1000).optional(),
})

router.post('/', validate(demoRequestSchema), createDemoRequest)

module.exports = router
