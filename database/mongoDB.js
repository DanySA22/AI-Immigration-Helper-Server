require('dotenv').config()
const mongoose = require('mongoose')

const mongodbURL = process.env.MONGODB_URL;

const connectToDB = async () => {
    try {
        await mongoose.connect(mongodbURL, {useNewUrlParser: true, useUnifiedTopology: true})
    } catch (error) {
        console.error("Connection to MongoDB failed:", error)
        process.exit(1);
        
    }
}

connectToDB()


module.exports = mongoose