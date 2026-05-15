const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const { errorHandler, notFound } = require('./middleware/errorHandler')
const apiLimiter = require('./middleware/rateLimiter')
const contactRoutes = require('./routes/contact.routes')
const demoRequestRoutes = require('./routes/demoRequest.routes')
const newsletterRoutes = require('./routes/newsletter.routes')

const app = express()
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(helmet())
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }

      callback(new Error(`CORS blocked origin: ${origin}`))
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
)
app.use(express.json({ limit: '20kb' }))
app.use('/api', apiLimiter)

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'AppzetBilling API is running' })
})

app.use('/api/contact', contactRoutes)
app.use('/api/demo-request', demoRequestRoutes)
app.use('/api/newsletter', newsletterRoutes)

app.use(notFound)
app.use(errorHandler)

module.exports = app
