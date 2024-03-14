const express = require('express')
const router = express.Router()
const knex = require('../database/index')

//this route pull from Atlas based in user id
router.get('/:id', (req, res) => {
    try {
        res.json("Signup form backend endpoint")
} catch (error) {
        console.log('Error trying to retrieve history data:', error)
    }
})

router.get('/:id/download', (req, res) => {
    try {
        res.json("Login form backend endpoint")
} catch (error) {
        console.log('Error trying to retrieve history data to be downloaded:', error)
    }
})

module.exports = router;