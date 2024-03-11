const knex = require('knex')
const config = require('./knexfile').development

// This line initializes knex by calling it with the previously imported configuration object 
// for the development environment. The result is stored in the db variable, which is now an instance 
// of knex configured to connect to your development database. This db instance can be used throughout 
//your application to build and run SQL queries in a convenient and secure way, taking advantage of knex's 
//features like query building, schema migrations, seed files, and more.
const db = knex(config)

async function selectUsers() {
    try {
        const users = await db.select()
        console.log(users)
    } catch (error) {
        console.log(err)
    }
}

//Here you can create all type of queries