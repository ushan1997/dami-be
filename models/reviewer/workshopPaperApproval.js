const mongoose = require('mongoose');

const workshopPaperApprovalSchema = new mongoose.Schema({
    workshopconductorsfullName: {
      type: String,
      required: true,
      trim:true
    },
    workshopconductorsemail: {
      type: String,
      required: true,
      trim:true
    },
    workshopconductorsphoneNo:{
      type: String,
      required: true,
      trim:true
    },
    content:{
      type: Buffer,
      require:true
       
   }
});

const workshopPaperApproval = mongoose.model('workshopPaperApproval', workshopPaperApprovalSchema );
module.exports = workshopPaperApproval;