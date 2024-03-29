const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy,
     ExtractJwt = require('passport-jwt').ExtractJwt

require('dotenv').config()
const {SECRET_KEY} = process.env
const knex = require('../database/index')


const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = SECRET_KEY


passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
     try {
        console.log(jwt_payload)
        const user = await knex("users")
        .where({'userId': jwt_payload.id})  
        .first()
        
        if (user) {
            return done(null, user)   //return the user object
        }  else {
            return done(null, false)
        }

     } catch (error) {
        return done(error, false)
     }



}))

