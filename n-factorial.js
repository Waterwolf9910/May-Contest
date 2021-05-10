module.exports.nFractorial = (num) => {
    let i = 0
    let num = 5
    let x = 1
    let y = 1
    while (i < num) {
        x = x * y
        i++
        y++
    }
    return x
}
