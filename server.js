const express = require('express')      
const app = express()
const cors = require('cors')
const ai = require("./routes/ai.js")
const history = require("./routes/history.js")

require('dotenv').config()
const {PORT} = process.env

app.use(express.json())
app.use(cors())

app.use('/ai', ai)
app.use('/history', history)
// app.use(express.static('./public/images-video'))
app.listen(PORT)