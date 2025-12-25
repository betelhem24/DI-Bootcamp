// fileManager.js - CommonJS syntax

const fs = require('fs');

function readFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return content;
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
        return null;
    }
}

function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Successfully wrote to ${filePath}`);
        return true;
    } catch (error) {
        console.error(`Error writing file: ${error.message}`);
        return false;
    }
}

module.exports = { readFile, writeFile };