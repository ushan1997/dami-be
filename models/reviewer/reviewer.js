const mongoose = require('mongoose');

const reviewerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phoneNo: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    }
});

const reviewer = mongoose.model('reviewer', reviewerSchema);
module.exports = reviewer;