// @ts-check
/**
 * 
 * @param {number} num 
 */
module.exports.numSum = (num) => {
    if (!(typeof num == "number")) {
        throw new TypeError(`${num} is not a number type`)
    }
    let x = 0
    for (let i = 0; i < num; i++) {
        x = x + (i + 1)
    }
    return x
}
