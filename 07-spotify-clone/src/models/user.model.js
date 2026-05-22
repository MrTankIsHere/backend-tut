const mongoose = require("mongoose");
const { type } = require("node:os");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        // enum: to say that there can be 2 values of role... 
        // there can not be other value other than the given roles
        enum: [ 'user', 'artist' ],
        // default role will be user
        default: 'user',
    }

})




const userModel = mongoose.model('user', userSchema);
module.exports = userModel;