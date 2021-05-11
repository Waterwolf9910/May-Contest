// @ts-nocheck
const moment = require("moment")

// function isLeap(year) {
//     let y
//     let leap = false
//     if (year < 10) {
//         y = `000${year}`
//     } else if (year < 100) {
//         y = `00${year}`
//     } else if (year < 1000) {
//         y = `0${year}`
//     } else {
//         y = year
//     }
//     if (moment(`${y}-12-31`).dayOfYear() == 366) {
//         leap = true
//     }
//     return leap
// }
/**
 * 
 * @param {string | number} start - The year to start check on
 * @param {number} end 
 * @returns 
 */
module.exports.countLeaps = (start, end = moment().year()) => {
    if (typeof start !== "string" && typeof start !== "number") {
        throw new TypeError("start is not a string or a number")
    }
    if (typeof end !== "string" && typeof end !== "number") {
        throw new TypeError("end is not a string or a number")
    }
    if (start > end) {
            throw new SyntaxError(`start cannot get greater than end. { start: ${start}, end: ${end}}`)
    }
    /**
     * @type {any}
     */
    let year
    if (parseInt(start) < 10) {
        year = `000${parseInt(start)}`
    } else if (parseInt(start) < 100) {
        year = `00${parseInt(start)}`
    } else if (parseInt(start) < 1000) {
        year = `0${parseInt(start)}`
    } else {
        year = parseInt(start)
    }
    let leaps = 0
    // @ts-ignore
    while (year < parseInt(end)) {
        if (moment(`${year}`).isLeapYear()) {
            leaps++
        }
        year++
    }
    return leaps
}
