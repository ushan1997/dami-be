const mongoose = require('mongoose');

const researchPaperApprovalSchema = new mongoose.Schema({
    researchersfullName: {
      type: String,
      required: true,
      trim:true
    },
    researchersemail: {
      type: String,
      required: true,
      trim:true
    },
    researchersphoneNo: {
      type: String,
      required: false,
      trim:true
    },
    content:{
      type: Buffer,
      require:false
       
   }
});

const researchPaperApproval = mongoose.model('researchPaperApproval', researchPaperApprovalSchema );
module.exports = researchPaperApproval;