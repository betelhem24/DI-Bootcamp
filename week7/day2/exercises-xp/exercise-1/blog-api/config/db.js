const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'blog_db',
    user: 'postgres',
    password: '1624', // Change this to your PostgreSQL password
});

pool.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Database connection error:', err));

module.exports = pool;