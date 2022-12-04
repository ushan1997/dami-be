const mongoose = require("mongoose");

const SpeakerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  imgURL: {
    type: String,
    require: true,
    trim: true,
  },
});
mongoose.model("Speaker", SpeakerSchema);
