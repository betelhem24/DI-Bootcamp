require('dotenv').config();
const db = require('./server/config/db');

async function testDatabase() {
  try {
    console.log('Testing database connection...');
    console.log('Config:', {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER
    });

    // Test connection
    await db.raw('SELECT 1');
    console.log('✅ Database connection successful!');

    // Check if tables exist
    const tables = await db.raw(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    console.log('\n📋 Existing tables:');
    tables.rows.forEach(row => console.log(`  - ${row.table_name}`));

    // Check users table structure
    if (tables.rows.some(row => row.table_name === 'users')) {
      const usersColumns = await db.raw(`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_name = 'users'
      `);
      console.log('\n👤 Users table columns:');
      usersColumns.rows.forEach(col => {
        console.log(`  - ${col.column_name} (${col.data_type})`);
      });
    }

    // Check hashpwd table structure
    if (tables.rows.some(row => row.table_name === 'hashpwd')) {
      const hashpwdColumns = await db.raw(`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_name = 'hashpwd'
      `);
      console.log('\n🔒 Hashpwd table columns:');
      hashpwdColumns.rows.forEach(col => {
        console.log(`  - ${col.column_name} (${col.data_type})`);
      });
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Database test failed:');
    console.error('Error:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  }
}

testDatabase();