const mongoose = require('mongoose')

const demoRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    businessType: { type: String, required: true, trim: true },
    preferredDate: { type: Date },
    notes: { type: String, trim: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('DemoRequest', demoRequestSchema)
