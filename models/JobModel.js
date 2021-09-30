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
    type: String,
    required: true,
  },
  companyBillingEmail: {
    type: String,
    required: true,
  },
  companyAbout: {
    type: String,
  },
  plan: {
    type: String,
    required: true,
  },
  dateOfPurchase: {
    type: Date,
    default: Date.now,
  },
  dateOfExpiry: {
    type: Date,
  },
});

// module.exports.JobSchema = JobSchema;
module.exports = mongoose.model('Job', JobSchema);
