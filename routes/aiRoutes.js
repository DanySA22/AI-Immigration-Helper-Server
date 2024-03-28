const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../authentication/passport')
const {inputUser, outputSave} = require("../controllers/aiRoutesControllers")

router.post('/input', inputUser)

function authenticateJwt(req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) return next(err);
      if (!user) {
        // This is where you could throw a custom error or handle the failure directly
        return res.json({ 
            noLogged: true,
            message: "You need to log in to access this resource." });
      }
      // If authentication succeeds, proceed with the request
      next();
    })(req, res, next);
  }

router.post('/output/save', authenticateJwt, outputSave)


module.exports = router;