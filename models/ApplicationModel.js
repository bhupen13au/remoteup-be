const mongoose = require('mongoose');

const ApplicationSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
  },
  resume: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Application', ApplicationSchema);
