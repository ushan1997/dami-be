const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  imgURL: {
    type: String,
    required: false,
    trim: true
  }
});


mongoose.model("News", NewsSchema);