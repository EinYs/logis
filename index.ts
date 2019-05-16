/**
 * This function makes string starts with current file name
 * @param errorMsg discribes error
 */
const path = require('path');
export default function log(message: any, enableConsoleLog:boolean = true) {
    if(typeof message ==='object')
        message = JSON.stringify(message)
    if(typeof message !== 'string')
        message = message.toString()

    const filename = `[${path.basename(__filename)}] `
    if(enableConsoleLog)
        console.log(filename + message)
    return filename + message
}