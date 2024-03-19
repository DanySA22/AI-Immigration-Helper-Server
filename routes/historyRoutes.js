const express = require('express')
const router = express.Router()
const knex = require('../database/index')
const OutputUser = require('../models/outputUser')

//this route pull from Atlas based in user id
router.get('/:id', async (req, res) => {
    try {
        const outputLatest = await OutputUser.find({userId: 2})
        res.json(outputLatest)
} catch (error) {
        console.log('Error trying to retrieve history data:', error)
    }
})

router.get('/:id/download', (req, res) => {
    try {
        res.json("Login form backend endpoint")
} catch (error) {
        console.log('Error trying to retrieve history data to be downloaded:', error)
    }
})

module.exports = router;