var knex = require('../db/knex');

module.exports =  {
  getUserByEmail: function(email) {
    return knex('user').where('email', email).first();
  }
}
