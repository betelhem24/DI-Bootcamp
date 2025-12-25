import chalk from 'chalk'

export const dispalyColorMessage = msg => {
    return chalk.yellow(msg)
}

export const dispalyErrorMessage = msg => {
    return chalk.bold.red(msg)
}