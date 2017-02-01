// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postrgres://localhost/training_logs'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
