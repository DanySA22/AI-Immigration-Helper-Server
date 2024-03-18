const mongoose = require('mongoose')
require('dotenv').config()

const mongodbURL = 'mongodb://localhost:27017/AI-Immigration-Helper';

const connectToDB = async () => {
    try {
        await mongoose.connect(mongodbURL)
    } catch (error) {
        console.error("Connection to MongoDB failed:", error)
        process.exit(1);
        
    }
}