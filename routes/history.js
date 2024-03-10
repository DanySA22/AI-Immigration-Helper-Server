const express = require('express')
const router = express.Router()




router.get('/:id', (req, res) =>{
    res.json('Sending history of a particular user')
})


router.get('/:id/download', (req, res) =>{
    res.json('Sending history of a particular user')
})


module.exports = router;