const mongoose = require('mongoose');

const AttendeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim:true
  },
  email: {
    type: String,
    required: true,
    trim:true
  },
  password: {
    type: String,
    required: true,
    trim:true
  },
  phoneNo: {
    type: String,
    required: true,
    trim:true
  },
  payment: {
    type: Number,
    required: true
  },
});

const Attendee = mongoose.model('attendee', AttendeeSchema);
module.exports = Attendee;