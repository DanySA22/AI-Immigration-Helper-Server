const express = require('express')      
const app = express()
const cors = require('cors')
const knex = require('./database/index')
require('dotenv').config()
const {PORT} = process.env
const ai = require('./routes/aiRoutes')
const authent = require('./routes/authentRoutes')
const history = require('./routes/historyRoutes')


app.use(express.json())
app.use(cors())
app.use(express.static('./public/images-video'))
app.use('/ai', ai)
app.use('/authent', authent)
app.use('/history', history)


//I need to add this Atlas connection string in some part of my code:
//mongodb+srv://DanielSA:rootroot@aiimmigrationhelper.murmvz4.mongodb.net/?retryWrites=true&w=majority&appName=AIImmigrationHelper
//mongodb+srv://DanielSA:<password>@aiimmigrationhelper.murmvz4.mongodb.net/

app.listen(PORT)