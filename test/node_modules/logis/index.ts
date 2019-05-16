/**
 * This function makes string starts with current file name
 * @param errorMsg discribes error
 */
const path = require('path');
export default function log(errorMsg: string, enableConsoleLog:boolean = true) {
    const filename = `[${path.basename(__filename)}] `
    if(enableConsoleLog)
        console.log(filename + errorMsg)
    return filename + errorMsg
}