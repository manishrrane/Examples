const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB not Connected",error);
    }
};

module.exports = connectDB;