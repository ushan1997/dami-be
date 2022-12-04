const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
});

const admin = mongoose.model("admin", AdminSchema);
module.exports = admin;
