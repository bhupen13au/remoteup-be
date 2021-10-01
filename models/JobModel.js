const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
  active: {
    type: Boolean,
  },
  position: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
  },
  candidateRegion: {
    type: String,
  },
  applyType: {
    type: String,
    required: true,
  },
  jobDessription: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyWebsite: {
    type: String,
    required: true,
  },
  companyTagline: {
    type: String,
  },
  companyLogo: {
    type: String, // path
    required: true,
  },
  companyBillingEmail: {
    type: String, // email-id
    required: true,
  },
  companyAbout: {
    type: String,
  },
  plan: {
    type: String, // 1-month, 3-month, 6-month, year
    required: true,
  },
  dateOfPurchase: {
    type: Date,
    default: Date.now,
  },
  dateOfExpiry: {
    type: Date,
  },
  createdBy: {
    type: String,
    required: true,
  },
  updatedBy: {
    type: String,
  },
  createdTS: {
    type: Date,
    default: Date.now,
  },
  updatedTS: {
    type: Date,
  },
});

module.exports = mongoose.model('Job', JobSchema);
