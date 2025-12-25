// app.js - CommonJS syntax

const chalk = require('chalk');

console.log('\n' + '='.repeat(50));
console.log(chalk.blue.bold('  Welcome to the Colorful Terminal!'));
console.log('='.repeat(50) + '\n');

console.log(chalk.green('✓ This is a success message!'));
console.log(chalk.red('✗ This is an error message!'));
console.log(chalk.yellow('⚠ This is a warning message!'));
console.log(chalk.cyan('ℹ This is an info message!'));

console.log('\n' + chalk.bgBlue.white.bold(' Styled Background Text '));

console.log('\n' + chalk.magenta('You can also use ') + 
            chalk.bold.underline('bold and underline') + 
            chalk.magenta(' styles!'));

console.log('\n' + chalk.rgb(255, 136, 0)('Custom RGB colors are supported too!'));

console.log('\n' + chalk.hex('#FF69B4')('And even hex colors like this pink!'));

console.log('\n' + '='.repeat(50));
console.log(chalk.rainbow('🌈 Thank you for using Chalk! 🌈'));
console.log('='.repeat(50) + '\n');