// read-directory.js - CommonJS syntax

const fs = require('fs');

const directoryPath = './'; // Current directory

try {
    console.log(`Reading files in directory: "${directoryPath}"\n`);
    
    // Read the list of files in the directory
    const files = fs.readdirSync(directoryPath);
    
    console.log('Files in directory:');
    console.log('===================');
    
    if (files.length === 0) {
        console.log('No files found.');
    } else {
        files.forEach((file, index) => {
            // Get file stats to determine if it's a file or directory
            const stats = fs.statSync(file);
            const type = stats.isDirectory() ? '[DIR]' : '[FILE]';
            console.log(`${index + 1}. ${type} ${file}`);
        });
    }
    
    console.log('===================\n');
    console.log(`Total items: ${files.length}`);
    
} catch (error) {
    console.error(`Error: ${error.message}`);
}