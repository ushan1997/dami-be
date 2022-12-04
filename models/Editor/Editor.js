const mongoose = require("mongoose");

const EditorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNo: {
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

const editor = mongoose.model("editor", EditorSchema);
module.exports = editor;
