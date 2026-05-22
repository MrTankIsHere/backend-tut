const mongoose = require('mongoose');

async function connectDB () {

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.error("Database is connected........... :)");
    } catch (err) {
        console.error("Database is not connected........... :(", err);
    }

}

module.exports = connectDB;