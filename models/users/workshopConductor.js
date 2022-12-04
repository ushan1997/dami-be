const mongoose = require('mongoose');

const workshopConductorSchema = new mongoose.Schema({
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
    workshopTitle: {
      type: String,
      required: true,
      trim:true
    },
    workshopData: {
      type: String,
      required: true,
      trim:true
    },
    workshopTime: {
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

const workshopConductor = mongoose.model('workshopConductor', workshopConductorSchema);
module.exports = workshopConductor;