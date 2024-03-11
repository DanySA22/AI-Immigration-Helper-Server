const knex = require('knex')
const config = require('./knexfile').development


const db = knex(config)



//Here you can create all type of queries