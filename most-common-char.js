// @ts-check
class CommonChars {
    /**
     * 
     * @param {string} string - The String to gather chars from
     */
    constructor(string, verb_num = 0, jsonFormat = false) {
        if (!(typeof string == "string")) {
            throw new TypeError(`${string}`)
        }
        this.str = string
        this.verb = verb_num
        this.json = jsonFormat
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
                data[current] += 1
            }
        }
        if (this.verb > 0) {
            console.log(`Character Amounts ${data}`)
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
                if (this.verb > 1) {
                    console.log(`Found new char { now: ${i}, amount: ${data[i]} }`)
                }
                lastBig = data[i]
            } else if (data[i] == lastBig) {
                if (i == " ") {
                    bigest = { data: bigest.data + ` & space: ${data[i]}` }
                } else {
                    bigest = { data: bigest.data + ` & ${i}: ${data[i]}` }
                }
                if (this.verb > 1) {
                    console.log(`Found another char { now: ${i}, amount: ${data[i]} }`)
                }
            }
        }
        if (this.json) {
            return `{ "data": "${bigest.data}"}`
        } else {
            return bigest.data
        }
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
                if (this.verb > 1) {
                    console.log(`Found new char { now: ${i}, amount: ${data[i]} }`)
                }
                lastSmall = data[i]
            } else if (data[i] == lastSmall) {
                if (i == " ") {
                    smallest = { data: smallest.data + ` & space: ${data[i]}` }
                } else {
                    smallest = { data: smallest.data + ` & ${i}: ${data[i]}` }
                }
                if (this.verb > 1) {
                    console.log(`Found new char { now: ${i}, amount: ${data[i]} }`)
                }
            }
        }
        if (this.json) {
            return `{ "data": "${smallest.data}"}`
        } else {
            return smallest.data
        }
    }
}

module.exports.CommonChars = CommonChars
