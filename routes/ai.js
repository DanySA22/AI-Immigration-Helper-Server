const express = require('express')
const router = express.Router()



router.post('/input', (req, res) =>{
    res.json(req.body)
})

router.get('/output', (req, res) =>{
    res.json('Sending chatgpt output2')
})

router.post('/output/save/:id', (req, res) =>{
    res.json(req.body)
})

module.exports = router;