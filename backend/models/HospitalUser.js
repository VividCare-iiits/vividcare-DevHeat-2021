const mongoose = require("mongoose");

const { Schema } = mongoose;

const hospitalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    regID: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const HosUser = mongoose.model('hosUser', hospitalSchema);
module.exports = HosUser;