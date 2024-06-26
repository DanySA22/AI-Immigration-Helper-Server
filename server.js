const express = require('express')      
const app = express()
const cors = require('cors')
const knex = require('./database/index')
const ai = require('./routes/aiRoutes')
const authent = require('./routes/authentRoutes')
const history = require('./routes/historyRoutes')
const mongoose = require('./database/mongoDB')
require('dotenv').config()
const {PORT} = process.env
const passport = require('passport')
require('./authentication/passport')

app.use(passport.initialize())
app.use(express.json())
app.use(cors())
app.use(express.static('./assets/public_files'))
app.use('/ai', ai)
app.use('/authent', authent)
app.use('/history', history)

app.get('/', (req, res) => {
    res.send('Hello BrainStation!');
  });
  
app.listen(PORT)