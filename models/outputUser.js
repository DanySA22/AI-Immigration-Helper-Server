const mongoose = require('../database/mongoDB')
//A Schema in Mongoose is a structure that defines the shape of documents within a MongoDB collection. 
const outputUserSchema = new mongoose.Schema(
    {   userId: {type: Number, require: true},  //the id of the user that owns the document
        openAiOutput: {type: String, required: true, default: 'OpenAI output'},
        date: {type: Date, default: Date.now}
    }
)
const OutputUser = mongoose.model('OutputUser', outputUserSchema)
module.exports = OutputUser