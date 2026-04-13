const mongoose = require("mongoose")


const connectDB = async () => {
    const mongoUrl = process.env.MONGO_URL
    await mongoose.connect(mongoUrl) 
    console.log("Mongo connected.");
    
};

module.exports = {
    connectDB
}