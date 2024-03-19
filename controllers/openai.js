require('dotenv').config()
const {Configuration, OpenAI} = require('openai')
const {OPENAI_KEY} = process.env


// const configuration = new Configuration({
//     apiKey: OPENAI_KEY
// })

const openai = new OpenAI({
    apiKey: OPENAI_KEY
})


module.exports = openai