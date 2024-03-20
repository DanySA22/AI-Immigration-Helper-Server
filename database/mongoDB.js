const mongoose = require('mongoose')


const mongodbURL = 'mongodb://127.0.0.1:27017/AI-Immigration-Helper';

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