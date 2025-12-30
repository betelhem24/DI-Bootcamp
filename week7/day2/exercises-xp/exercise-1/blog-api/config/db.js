require('dotenv').config();
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'blog_db',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD,
    },
});

// Test the connection
db.raw('SELECT 1')
    .then(() => {
        console.log('✅ Connected to PostgreSQL database using Knex');
    })
    .catch((err) => {
        console.error('❌ Database connection error:', err.message);
        process.exit(1);
    });

module.exports = db;