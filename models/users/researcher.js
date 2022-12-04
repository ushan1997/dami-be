const mongoose = require('mongoose');

const ResearcherSchema = new mongoose.Schema({
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
    approve:{
      type: Boolean,
      required: false,
    },
    uploads:{
      type: Buffer,
      require:true
   }
});

const Researcher = mongoose.model('Researcher', ResearcherSchema);
module.exports = Researcher;