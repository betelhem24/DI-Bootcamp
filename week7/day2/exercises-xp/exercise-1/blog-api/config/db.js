require('dotenv').config();
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
});

// Test connection
db.raw('SELECT 1')
    .then(() => console.log('✅ Database connected'))
    .catch(err => {
        console.error('❌ DB connection error:', err.message);
        process.exit(1);
    });

module.exports = db;
