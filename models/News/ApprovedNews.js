const mongoose = require("mongoose");

const ApprovedNewsSchema = new mongoose.Schema({
  title: {
    type: "String",
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  imgURL: {
    type: String,
    required: false,
    trim: true,
  },
});

mongoose.model("ApprovedNews", ApprovedNewsSchema);
