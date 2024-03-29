const knex = require('../database/index')
const OutputUser = require('../models/outputUser')
const openai = require('../controllers/openai')


exports.inputUser =  async (req, res) => {
    
    try {
        
        const questionToProcess = req.body.question
        const responseAI = await openai.chat.completions.create(
            {  
                model: "gpt-4-turbo-preview",
                messages: [
                    {role: 'system', content: 'You are a helpful and friendly canada immigration advisor. Add some relevant emojis to your response'},
                    {role: 'user', content: questionToProcess + 'Can my answer be in one parragraph with less than 450 words?'},
                ],
                max_tokens: 350,
                temperature: 0.7,

            }
        )  //set chat creation configuration from model type; roles and max_tokens and temperature
        
        res.json(responseAI.choices[0].message.content)
} catch (error) {
    console.log('Error trying to post user input for OpenAI api:', error)
    res.status(500).json({ error: "Internal server error" });
    } 
}


exports.outputSave = async (req, res) => {
    try {
        
        req.body.userId = req.user.userId
        const userNewDocument = new OutputUser(req.body)
        const postedData = await userNewDocument.save()
        res.status(201).json(postedData)
} catch (error) {
    console.log('Error trying to save OpenAi api data related to an user:', error)
    res.status(500).json({ error: "Internal server error" });
    }
}