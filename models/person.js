const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    yearOfBirth:{
        type: Date,
        required: false
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        required: false
    }
})

module.exports = mongoose.model('Person',personSchema)
