require('dotenv').config()
const {Configuration, OpenAI} = require('openai')
const {OPENAI_KEY} = process.env


const openai = new OpenAI({
    apiKey: OPENAI_KEY
})


module.exports = openai