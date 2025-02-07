// models/Application.ts
import mongoose from 'mongoose'

const ApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  whatsappNo: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  currentSemester: {
    type: String,
    required: true,
  },
  applyingFor: {
    type: String,
    required: true,
  },
  tentativeDates: {
    type: String,
    required: true,
  },
  referenceName: String,
  source: {
    type: String,
    required: true,
  },
  query: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema)