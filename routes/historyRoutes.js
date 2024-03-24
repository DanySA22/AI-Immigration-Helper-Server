const express = require('express')
const router = express.Router()
const knex = require('../database/index')
const OutputUser = require('../models/outputUser')
const passport = require('passport')
require('../controllers/passport')

//this route pull from MongoDB based in user id
router.get('/', passport.authenticate('jwt', {session:false}), async (req, res) => {
    try {
        const userID = req.user.userId //passport middleware construct a user object from the decoded payload 
        //and a attached to the req object. This user object include info about the user id,e tc that we add when we sign
        //the JWT
        //because we are using this approach we don't need to use the dynamic id on endpoint
        
        const outputLatest = await OutputUser.find({userId: userID})
        res.json(outputLatest)
} catch (error) {
        console.log('Error trying to retrieve history data:', error)
    }
})


module.exports = router;