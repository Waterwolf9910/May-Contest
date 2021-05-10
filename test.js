#!/usr/bin/env node
const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const yarg = yargs(hideBin(process.argv))
const argv = yarg.option("string", {
    alias: "s",
    string: true
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

