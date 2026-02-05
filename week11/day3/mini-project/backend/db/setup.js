const db = require('./index');
const fs = require('fs');
const path = require('path');

const initDb = async () => {
    const sql = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf8');
    try {
        await db.query(sql);
        console.log('Database initialized successfully');
    } catch (err) {
        console.error('Error initializing database', err);
    }
};

initDb();
