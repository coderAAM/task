const mongoose = require("mongoose")


async function connectDB(req,res) {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("DATABASE IS CONNECTED");
    
}

module.exports = connectDB;