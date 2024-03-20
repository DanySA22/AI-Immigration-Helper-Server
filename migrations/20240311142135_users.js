/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
     return knex.schema.createTable('users', table => {
         table.increments('userId').primary()
         table.string('username').notNullable()
         table.string('email').notNullable()
         table.string('password').notNullable()
         table.timestamps('create_at')
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
