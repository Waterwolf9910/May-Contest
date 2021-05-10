#!/usr/bin/env node
const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const yarg = yargs(hideBin(process.argv))
const argv = yarg.option("run", {
    alias: "r",
    count: true
}).argv
const cp = require("./test2")
console.log(argv.run)
console.log(hideBin(process.argv))
console.log(process.argv)
console.log(process.argv.slice(2))
console.log(argv)
