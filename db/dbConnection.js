const mongoose = require('mongoose')
const { MONGOURI } = require('../keys')

const DBConnection = mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log("connected to the mongoDB");
})

mongoose.connection.on('error', () => {
    console.log("error occured! check mongoDB config");
})

module.exports = DBConnection;