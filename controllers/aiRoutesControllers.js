const knex = require('../database/index')
const OutputUser = require('../models/outputUser')
const openai = require('../controllers/openai')


exports.inputUser =  async (req, res) => {
    
    try {
        
        const questionToProcess = req.body.question
        console.log(questionToProcess)
        const responseAI = await openai.chat.completions.create(
            {  //I need to change later the gpt model to version 4; increase the number of tokens max; and 
                //set that friendly tone in the interaction)
                model: "gpt-3.5-turbo",
                messages: [{role: 'user', content: questionToProcess}],
                // prompt: questionToProcess,
                max_tokens: 150,
                temperature: 0.7,

            }
        )
        console.log(responseAI.choices[0].message)
        res.json(responseAI.choices[0].message.content)
} catch (error) {
    console.log('Error trying to post user input for OpenAI api:', error)
    res.status(500).json({ error: "Internal server error" });
    } 
}


exports.outputSave = async (req, res) => {
    try {
        console.log(req.body)
        req.body.userId = req.user.userId
        const userNewDocument = new OutputUser(req.body)
        const postedData = await userNewDocument.save()
        res.status(201).json(postedData)
} catch (error) {
    console.log('Error trying to save OpenAi api data related to an user:', error)
    res.status(500).json({ error: "Internal server error" });
    }
}