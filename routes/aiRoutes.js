const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../authentication/passport')
const {inputUser, outputSave} = require("../controllers/aiRoutesControllers")

router.post('/input', inputUser)

router.post('/output/save', passport.authenticate('jwt', {session:false}), outputSave)


module.exports = router;