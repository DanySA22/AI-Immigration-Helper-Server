const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../authentication/passport')
const {history} = require('../controllers/historyRoutesControllers')
//this route pull from MongoDB based in authenticated used

router.get('/', passport.authenticate('jwt', {session:false}), history)


module.exports = router;