const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../authentication/passport')
const {history} = require('../controllers/historyRoutesControllers') //this route pull from MongoDB based in authenticated used
const rateLimit = require('express-rate-limit')

const apiLimiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, //24 hours in ms
    max: 120,
    message: 'You have exceeded the 100 requests in 24hr limit. Try tomorrow again!',
    header: true
})  //add an Api Limiter to control the amount of requests to openAI api per day

function authenticateJwt(req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) return next(err);
      if (!user) {
        return res.json({ 
            noLogged: true,
            message: "You need to log in to access this resource." });
      }
      // If authentication succeeds, proceed with the request
    
     req.user = user
     console.log(req.user)
      next();
    })(req, res, next);
  }

router.get('/', apiLimiter, authenticateJwt, history)


module.exports = router;