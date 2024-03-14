const express = require('express')
const router = express.Router()
const knex = require('../database/index')


//This fist route is just for testing functionality
router.get('/', (req, res, next) => {
    try {
        const selectUsers = async () => {
            const usersTotal = await knex('users').select()
            console.log(usersTotal)
            res.json(usersTotal)
            next()
    }
    selectUsers()
} catch (error) {
        console.log(error)
    }
})

router.post('/input', (req, res) => {
    try {
        res.json("User created inputr")
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

router.post('/output/save/:id', (req, res) => {
    try {
        res.json("Posting the user output on MongoDB-Atlas")
} catch (error) {
        console.log(error)
    }
})


module.exports = router;