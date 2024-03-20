const express = require('express')
const router = express.Router()
const knex = require('../database/index')
const OutputUser = require('../models/outputUser')
const openai = require('../controllers/openai')
const fs = require('fs')
const multer = require('multer')
const upload = multer({dest: '../assets/public_files'})
const path = require('path')


router.post('/input', async (req, res) => {
    
    try {
        
        const questionToProcess = req.body.question
        console.log(questionToProcess)
        const responseAI = await openai.chat.completions.create(
            {  //I need to change later the gpt model to version 4; increase the number of tokens max; and 
                //set that friendly tone in the interaction; also uploaded file analysis (check in the bookmarked
                //openai node github repo)
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
        console.log(error)
    } 
})

//I think this endpoint is not necessary we just use the response object of the previous endpoint to populate
//the output area on the frontend 
// router.get('/output', (req, res) => {
//     try {
//         res.json("Retrieving chatgpt output")
// } catch (error) {
//         console.log( error)
//     }
// })


router.post('/output/save/:id', async (req, res) => {
    try {
        //req.body should have userId and openAiOutput data
        
        const userNewDocument = new OutputUser(req.body)
        console.log(userNewDocument)
        const postedData = await userNewDocument.save()
       
        //this create an instance of the userRelatedData model; you are creating a new document
        //where the properties are automatically mapped from the request body to the corresponding field in the
        // schema
        console.log(postedData)
        res.status(201).json(postedData)
} catch (error) {
        console.log(error)
    }
})


module.exports = router;