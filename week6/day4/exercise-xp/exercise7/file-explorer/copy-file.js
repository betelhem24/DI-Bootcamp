// copy-file.js - CommonJS syntax

const fs = require('fs');

const sourceFile = 'source.txt';
const destinationFile = 'destination.txt';

try {
    // Read content from source.txt
    console.log(`Reading content from "${sourceFile}"...`);
    const content = fs.readFileSync(sourceFile, 'utf8');
    
    console.log('\nContent read successfully:');
    console.log('-------------------');
    console.log(content);
    console.log('-------------------\n');
    
    // Write content to destination.txt
    console.log(`Writing content to "${destinationFile}"...`);
    fs.writeFileSync(destinationFile, content, 'utf8');
    
    console.log(`✓ Successfully copied content from "${sourceFile}" to "${destinationFile}"\n`);
    
} catch (error) {
    console.error(`Error: ${error.message}`);
}