// @ts-check
/**
 * 
 * @param {number} num 
 */
module.exports.numSum = (num, verb_num = 0, jsonFormat = false) => {
    if (!(typeof num == "number")) {
        throw new TypeError(`${num} is not a number type`)
    }
    let x = 0
    for (let i = 0; i < num; i++) {
        x += (i + 1)
        if (verb_num > 1) {
            console.log(`{x: ${x}, i: ${i}}`)
        }
    }
    if (jsonFormat) {
        return `{ "data": ${x} }`
    } else {
        return x
    }
    return x
}
