const express = require('express')      
const app = express()
const cors = require('cors')

require('dotenv').config()
const {PORT} = process.env

app.use(express.json())
app.use(cors())

app.use(express.static('./public/images-video'))
app.listen(PORT)