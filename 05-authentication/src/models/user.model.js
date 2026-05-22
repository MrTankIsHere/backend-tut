const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true, // make email id unique.... doesn't let user use same email twice to registere
    },
    password: String
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;