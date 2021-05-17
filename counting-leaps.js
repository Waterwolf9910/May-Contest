// @ts-nocheck
function isLeap(year) {
    let y
    let leap = false
    if (year < 10) {
        y = `000${year}`
    } else if (year < 100) {
        y = `00${year}`
    } else if (year < 1000) {
        y = `0${year}`
    } else {
        y = `${year}`
    }
    let testLeap
    let isCentury = ( parseInt(year) % 10 )
    if (isCentury == 0) {
        testLeap = (parseInt(year) % 400)
    } else {
        testLeap = (parseInt(year) % 4)
    }
    if (testLeap == 0) {
        leap = true
    }
    return leap
}
/**
 * 
 * @param {number} start - The year to start check on
 * @param {number} end 
 * @returns 
 */
module.exports.countLeaps = (start, end = new Date().getFullYear(), verb_num = 0, jsonFormat = false) => {
    if (typeof start !== "string" && typeof start !== "number") {
        throw new TypeError("Type Error: start is not a string or a number")
    }
    if (typeof end !== "string" && typeof end !== "number") {
        throw new TypeError("Type Error: end is not a string or a number")
    }
    if (start > end) {
        throw new SyntaxError(`Syntax Error: start cannot get greater than end. { start: ${start}, end: ${end}}`)
    }
    let year
    let yearend
    if (parseInt(start) < 10) {
        year = `000${parseInt(start)}`
    } else if (parseInt(start) < 100) {
        year = `00${parseInt(start)}`
    } else if (parseInt(start) < 1000) {
        year = `0${parseInt(start)}`
    } else {
        year = parseInt(start)
    }
    if (parseInt(end) < 10) {
        yearend = `000${parseInt(end)}`
    } else if (parseInt(end) < 100) {
        yearend = `00${parseInt(end)}`
    } else if (parseInt(end) < 1000) {
        yearend = `0${parseInt(end)}`
    } else {
        yearend = parseInt(end)
    }
    if (verb_num > 0) {
        console.log(`Start Year: ${year}`)
        console.log(`End Year: ${yearend}`)
    }
    let leaps = 0
    // @ts-ignore
    while (year < parseInt(yearend)) {
        if (isLeap(year)) {
            let lwas = leaps
            leaps++
            if (verb_num > 1) {
                console.log(`Found a leap year (${year}): { was: ${lwas}, now: ${leaps} }`)
            }
        }
        year++
    }
    if (isLeap(year)) {
        let lwas = leaps
        leaps++
        if (verb_num > 1) {
            console.log(`Found a leap year (${year}): { was: ${lwas}, now: ${leaps} }`)
        }
    }
    if (jsonFormat) {
        return `{ "data": ${parseInt(leaps)} }`
    } else {
        return leaps
    }
    
}
// same but with momentjs
// const moment = require("moment")
// /**
//  * 
//  * @param {string | number} start - The year to start check on
//  * @param {number} end 
//  * @returns 
//  */
// module.exports.countLeaps = (start, end = moment().year()) => {
//     if (typeof start !== "string" && typeof start !== "number") {
//         throw new TypeError("start is not a string or a number")
//     }
//     if (typeof end !== "string" && typeof end !== "number") {
//         throw new TypeError("end is not a string or a number")
//     }
//     if (start > end) {
//             throw new SyntaxError(`start cannot get greater than end. { start: ${start}, end: ${end}}`)
//     }
//     /**
//      * @type {any}
//      */
//     let year
//     if (parseInt(start) < 10) {
//         year = `000${parseInt(start)}`
//     } else if (parseInt(start) < 100) {
//         year = `00${parseInt(start)}`
//     } else if (parseInt(start) < 1000) {
//         year = `0${parseInt(start)}`
//     } else {
//         year = parseInt(start)
//     }
//     let leaps = 0
//     // @ts-ignore
//     while (year < parseInt(end)) {
//         let lwas = leaps
//         leaps++
//         if (verb_num > 1) {
//             console.log(`Found a leap year (${year}): { was: ${lwas}, now: ${leaps} }`)
//         }
//         year++
//     }
//     if (moment(`${year}`).isLeapYear()) {
//         let lwas = leaps
//         leaps++
//         if (verb_num > 1) {
//              console.log(`Found a leap year (${year}): { was: ${lwas}, now: ${leaps} }`)
//         }
//     }
//     return leaps
// }
