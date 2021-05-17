#!/usr/bin/env node
const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const yarg = yargs(hideBin(process.argv))
const argv = yarg.option("string", {
    alias: "s",
    array: true
}).argv
// const cp = require("./test2")
// console.log(argv.run)
// console.log(hideBin(process.argv))
// console.log(process.argv)
// console.log(process.argv.slice(2))
// console.log(argv)
// let str = argv.string
// let data = {}
// let lastBig = 0
// let lastSmall = Infinity
// let bigest = {}
// let smallest = {}
// for (let i in str) {
//     let current = str[i];
//     if (isNaN(data[current])) {
//         data[current] = 1
//     }
//     else {
//         data[current] = data[current] + 1
//     }
// }
// console.log(data)
// for (let i in data) {
//     if (data[i] > lastBig) {
//         if (i == " ") {
//             bigest = { data: `space: ${data[i]}` }
//         } else {
//             bigest = {data: `${i}: ${data[i]}`}
//         }
//         lastBig = data[i]
//     } else if (data[i] == lastBig) {
//         if (i == " ") {
//             bigest = { data: bigest.data + ` & space: ${data[i]}` }
//         } else {
//             bigest = { data: bigest.data + ` & ${i}: ${data[i]}` }
//         }
//     }
// }
// for (let i in data) {
//     if (data[i] < lastSmall) {
//         if (i == " ") {
//             smallest = { data: `space: ${data[i]}` }
//         } else {
//             smallest = { data: `${i}: ${data[i]}` }
//         }
//         lastSmall = data[i]
//     } else if (data[i] == lastSmall) {
//         if (i == " ") {
//             smallest = { data: smallest.data + ` & space: ${data[i]}` }
//         } else {
//             smallest = { data: smallest.data + ` & ${i}: ${data[i]}` }
//         }
//     }
// }
// console.log(bigest)
// console.log(smallest)

// let num = parseInt(argv.string)
// let x = 0
// for (let i = 0; i < num ; i++) {
//     x = x+(i+1)
// }
// console.log(x)

// const moment = require("moment")
// function countLeaps (start, end = moment().year()) {
//     if (typeof start !== "string" || typeof start !== "number")
//         if (start > end) {
//             throw new SyntaxError(`start cannot get greater than end. { start: ${start}, end: ${end}}`)
//         }
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
//     while (year < parseInt(end)) {
//         if (moment(`${year}`).isLeapYear()) {
//             leaps++
//         }
//         year++
//     }
//     return leaps
// }
//console.log(require("./counting-leaps").countLeaps("2012", "2016"))
console.log(require("./n-factorial").nFractorial(argv.string))
