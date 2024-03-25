
const knex = require('../database/index')
const OutputUser = require('../models/outputUser')


exports.history = async (req, res) => {
    try {
        const userID = req.user.userId //passport middleware construct a user object from the decoded payload 
        //and a attached to the req object. This user object include info about the user id,e tc that we add when we sign
        //the JWT
        const outputLatest = await OutputUser.find({userId: userID})
        res.json(outputLatest)
} catch (error) {
        console.log('Error trying to retrieve history data:', error)
        res.status(500).json({ error: "Internal server error" });
    }
}
