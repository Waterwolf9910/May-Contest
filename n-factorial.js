// @ts-check
/**
 * max 170
 * @param {number} num 
 * @returns - Returns num!
 */
module.exports.nFractorial = (num, verb_num = 0, jsonFormat = false) => {
    let i = 0
    let x = 1
    let y = 1
    if (num > 170) {
        throw new RangeError(`${num} is too big { max: 170 }`)
    }
    while (i < num) {
        let oldx = x
        x = x * y
        if (verb_num > 1) {
            console.log(`${oldx} * ${y} = ${x}`)
        }
        i++
        y++
    }
    if (jsonFormat) {
        return `{ "data": ${x} }`
    } else {
        return x
    }
}
