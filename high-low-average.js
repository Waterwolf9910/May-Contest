// @ts-check
/**
 * 
 * @param {Array<number>} array 
 */
module.exports.average = (array, verb_lvl = 0, jsonFormat = false) => {
    let data
    let org_array = array
    if ((array.length % 2) > 0) {
        data = array.sort()[(array.length / 2) - 0.5]
    } else {
        data = `${array.sort()[(array.length / 2) - 1]} & ${array.sort()[array.length / 2]}`
    }
    if (verb_lvl > 0) {
        console.log(`Receieved Array: ${org_array}
    sorted: ${org_array.sort()}
Math Equation: (array.length % 2) -0.5 || (array.length % 2) && -1
`)
        if (verb_lvl > 1) {
            console.log(`All solved:
    (array.length % 2) = ${(array.length % 2)}: val of array = ${array.sort()[array.length % 2]}
    (array.length % 2) -0.5 = ${(array.length % 2) - 0.5}: val of array = ${array.sort()[(array.length % 2) - 0.5]}
    (array.length % 2) -1 = ${(array.length % 2) - 1}: val of array = ${array.sort()[(array.length % 2) - 1]}
`)
        }
    }
    if (jsonFormat) {
        // @ts-ignore
        return `{"data": ${parseInt(data)}}`
    } else {
        return data
    }
}
