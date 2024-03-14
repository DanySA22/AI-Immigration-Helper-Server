const express = require('express')
const router = express.Router()
const knex = require('../database/index')


router.post('/sign-up', (req, res) => {
    try {
        res.json("Signup form backend endpoint")
} catch (error) {
        console.log('Error trying to post the signup form data:', error)
    }
})

router.post('/login', (req, res) => {
    try {
        res.json("Login form backend endpoint")
} catch (error) {
        console.log('Error trying to post the login form data:', error)
    }
})
module.exports = router;