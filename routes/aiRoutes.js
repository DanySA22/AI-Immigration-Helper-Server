const express = require('express')
const router = express.Router()
const knex = require('../database/index')
const OutputUser = require('../models/outputUser')


router.post('/input', (req, res) => {
    try {
        res.json("User created input")
} catch (error) {
        console.log(error)
    }
})

router.get('/output', (req, res) => {
    try {
        res.json("Retrieving chatgpt output")
} catch (error) {
        console.log( error)
    }
})


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