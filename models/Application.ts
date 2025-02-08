// models/Application.ts
import mongoose, { Document } from 'mongoose';

// Define an interface for the Application document
interface IApplication extends Document {
  fullName: string;
  whatsappNo: string;
  emailAddress: string;
  collegeName: string;
  branch: string;
  currentSemester: string;
  applyingFor: string;
  tentativeDates: string;
  referenceName?: string;
  source: string;
  query?: string;
  submittedAt: Date;
}

const ApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  whatsappNo: {
    type: String,
    required: [true, 'WhatsApp number is required'],
    trim: true,
    match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number']
  },
  emailAddress: {
    type: String,
    required: [true, 'Email address is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    index: true // Add index for faster queries
  },
  collegeName: {
    type: String,
    required: [true, 'College name is required'],
    trim: true,
    minlength: [2, 'College name must be at least 2 characters long']
  },
  branch: {
    type: String,
    required: [true, 'Branch is required'],
    trim: true
  },
  currentSemester: {
    type: String,
    required: [true, 'Current semester is required'],
    trim: true
  },
  applyingFor: {
    type: String,
    required: [true, 'Application type is required'],
    trim: true,
    enum: {
      values: ['Summer Internship', 'Winter Internship', 'Industrial Training'], // Add your valid options
      message: '{VALUE} is not a valid application type'
    }
  },
  tentativeDates: {
    type: String,
    required: [true, 'Tentative dates are required'],
    trim: true
  },
  referenceName: {
    type: String,
    trim: true,
    default: null
  },
  source: {
    type: String,
    required: [true, 'Source is required'],
    trim: true,
    enum: {
      values: ['LinkedIn', 'Instagram', 'Facebook', 'College', 'Friend', 'Other'], // Add your valid sources
      message: '{VALUE} is not a valid source'
    }
  },
  query: {
    type: String,
    trim: true,
    maxlength: [500, 'Query cannot exceed 500 characters'],
    default: null
  },
  submittedAt: {
    type: Date,
    default: Date.now,
    index: true // Add index for faster queries
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
  versionKey: false // Removes __v field
});

// Add indexes for common queries
ApplicationSchema.index({ fullName: 1, emailAddress: 1 });
ApplicationSchema.index({ submittedAt: -1 });

// Add pre-save middleware
ApplicationSchema.pre('save', function(next) {
  this.lastUpdated = new Date();
  next();
});

// Add instance methods if needed
ApplicationSchema.methods.updateStatus = function(status: string) {
  this.status = status;
  this.lastUpdated = new Date();
  return this.save();
};

// Add static methods if needed
ApplicationSchema.statics.findByEmail = function(email: string) {
  return this.findOne({ emailAddress: email.toLowerCase() });
};

// Virtual for full application reference
ApplicationSchema.virtual('applicationReference').get(function() {
  return `APP-${this._id.toString().slice(-6).toUpperCase()}`;
});

// Ensure virtuals are included in JSON output
ApplicationSchema.set('toJSON', {
  virtuals: true,
  transform: function(doc, ret) {
    delete ret._id;
    return ret;
  }
});

// Export the model and its interface
const Application = mongoose.models.Application || mongoose.model<IApplication>('Application', ApplicationSchema);

export default Application;
export type { IApplication };