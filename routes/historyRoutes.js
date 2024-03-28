const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../authentication/passport')
const {history} = require('../controllers/historyRoutesControllers')
//this route pull from MongoDB based in authenticated used


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
    //   console.log(req.body)
     req.user = user
     console.log(req.user)
      next();
    })(req, res, next);
  }

router.get('/', authenticateJwt, history)


module.exports = router;