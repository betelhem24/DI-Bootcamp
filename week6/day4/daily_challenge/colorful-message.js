// colorful-message.js
const chalk = require('chalk');

function displayColorfulMessage() {
    console.log(chalk.blue('This is a blue message!'));
    console.log(chalk.red.bold('This is bold red text!'));
    console.log(chalk.green.underline('This is underlined green text!'));
    console.log(chalk.yellow.bgBlack('Yellow text on black background!'));
}

module.exports = displayColorfulMessage;