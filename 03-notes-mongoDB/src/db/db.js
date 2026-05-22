const mongoose = require("mongoose");

async function connectDB() {

    try {
        await mongoose.connect("MONGO_URI=<mogno_URI>");
        console.log("MongoDB is connected..............   :)");
    } catch (error) {
        console.log("MongoDB is not connected..........    :(");
    }

}

module.exports = connectDB;
