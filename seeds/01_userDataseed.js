/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {userId: 1, 
    userName: 'Pedro27',
    email: 'testing@gmail.com',
    password: 'thepassword24$'
  },
  {userId: 2, 
    userName: 'Pedro28',
    email: 'testing@gmail.com',
    password: 'thepassword24$'
  },
  {userId: 3, 
    userName: 'Pedro29',
    email: 'testing@gmail.com',
    password: 'thepassword24$'
  },
  {userId: 4, 
    userName: 'Pedro30',
    email: 'testing@gmail.com',
    password: 'thepassword24$'
  },
  ]);
};
