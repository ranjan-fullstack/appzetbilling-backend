const express = require('express')
const { z } = require('zod')
const { subscribeNewsletter } = require('../controllers/newsletter.controller')
const validate = require('../middleware/validate')

const router = express.Router()

const newsletterSchema = z.object({
  email: z.email(),
})

router.post('/', validate(newsletterSchema), subscribeNewsletter)

module.exports = router
