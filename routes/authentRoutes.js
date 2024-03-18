const express = require('express')
const router = express.Router()
const knex = require('../database/index')
const bcrypt = require('bcrypt')

const saltRounds = 10

router.post('/sign-up', async (req, res) => {
    try {
        const { username, email, password, } = req.body
        if (!username || !email || !password) {
          res.status(400).send("Missing properties on the request body")
        } else {
        const passwordHash = await bcrypt.hash(req.body.password, saltRounds)
          const userInformation = {
            username: username,
            email: email, 
            password: passwordHash
          }
          await knex("users").insert(userInformation)
          res.status(200).json(req.body)
        }
    } catch (error) {
        console.log('Error trying to post the signup form data:', error)
        res.status(500).json({ error: "Internal server error" });

    }
})

router.post('/login', async (req, res) => {
    try {
        const { username, password, } = req.body
        if (!username || !password) {
          res.status(400).send("Missing properties on the request body")
        } else {
        //Here I should compare the req.body with all the similar duo on DB; and if 
        //there is a match retrieve a web token to the frontend (this is done with Passport.js, not do it for now)
          res.status(200).json(req.body)
        }
} catch (error) {
    console.log('Error trying to post the login form data:', error)
    res.status(500).json({ error: "Internal server error" });

    }
})
module.exports = router;