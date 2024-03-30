const knex = require('../database/index')
const bcrypt = require('bcrypt')
const saltRounds = 10
require('dotenv').config()
const {SECRET_KEY} = process.env
const jwt = require('jsonwebtoken')
const passport = require('passport')
require('../authentication/passport')

exports.signUp = async (req, res) => {
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
}


exports.login = async (req, res) => {
    try {
      console.log(5)
        const { username, password } = req.body
        console.log(username, password)
        if (!username || !password) {
          return res.status(400).send("Missing properties on the request body")
        } else {
        const user = await knex("users").where({username}).first()
          if (!user) {
            return res.status(400).json('User not found')
          }
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
          return res.status(400).json('Invalid password')
        } else{
        const userIdentification = {id: user.userId}
        const token = jwt.sign(userIdentification, SECRET_KEY, {expiresIn: '1h'} )  //generating a JSON web token for a user after succesfully authentication
        //where the payload include user id; we also have the secret key to sign the token
        console.log(userIdentification)
        return res.status(200).json({token: token})
      }}
} catch (error) {
    console.log('Error trying to post the login form data:', error)
    res.status(500).json({ error: "Internal server error" });

    }
}
