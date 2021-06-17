const mongoose = require('mongoose');

const UserSchema = mongoose.Schema( {
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date
  }
});

module.exports = mongoose.model( 'User', UserSchema );