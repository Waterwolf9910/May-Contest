// @ts-check
class CommonChars {
    /**
     * 
     * @param {string} string - The String to gather chars from
     */
    constructor(string) {
        if (!(typeof string == "string")) {
            throw new TypeError(`${string}`)
        } 
        this.str = string
    }
    /**
     * @returns - Returns a object with amount of characters attached
     */
    getAmount() {
        let string = this.str
        let data = {}
        // @ts-ignore
        for (let i in string) {
            let current = string[i];
            if (isNaN(data[current])) {
                data[current] = 1
            }
            else {
                data[current] = data[current] + 1
            }
        }
        return data
    }
    /**
     * @returns - Returns a object with the most common char(s) in {string}
     */
    most_common() {
        let data = this.getAmount()
        let lastBig = 0
        let bigest = {}

        for (let i in data) {
            if (data[i] > lastBig) {
                if (i == " ") {
                    bigest = { data: `space: ${data[i]}` }
                } else {
                    bigest = { data: `${i}: ${data[i]}` }
                }
                lastBig = data[i]
            } else if (data[i] == lastBig) {
                if (i == " ") {
                    bigest = { data: bigest.data + ` & space: ${data[i]}` }
                } else {
                    bigest = { data: bigest.data + ` & ${i}: ${data[i]}` }
                }
            }
        }

        return bigest
    }
    /**
     * @returns - Returns a object with the least common char(s) in {string}
     */
    least_common() {
        let data = this.getAmount()
        let lastSmall = Infinity
        let smallest = {}

        for (let i in data) {
            if (data[i] < lastSmall) {
                if (i == " ") {
                    smallest = { data: `space: ${data[i]}` }
                } else {
                    smallest = { data: `${i}: ${data[i]}` }
                }
                lastSmall = data[i]
            } else if (data[i] == lastSmall) {
                if (i == " ") {
                    smallest = { data: smallest.data + ` & space: ${data[i]}` }
                } else {
                    smallest = { data: smallest.data + ` & ${i}: ${data[i]}` }
                }
            }
        }

        return smallest
    }
}

module.exports.CommonChars = CommonChars
