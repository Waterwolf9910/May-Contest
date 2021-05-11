#!/usr/bin/env node
// @ts-check
const yargs = require("yargs/yargs")
const numSum = require("./num-sum").numSum
const nFractorial = require("./n-factorial").nFractorial

const CommonChars = require("./most-common-char").CommonChars
const { hideBin } = require("yargs/helpers")
const yarg = yargs(hideBin(process.argv))
const argvRaw = yarg
.option("run", {
    alias: "r",
    choices: ["num-sum", "counting-leaps", "n-factorial"]
})
.option("interactive", {
    alias: "i",
    boolean: true
})
const argv = argvRaw.argv

function getObjectLength(obj) {
    let length = 0
    for (let i in obj) {
        if (Object.hasOwnProperty.call(obj, i)) length++
    }
    return length
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ""
})

rl.on("SIGINT", () => {
    rl.on("SIGINT", exit)
    rl.question(`Are you sure you would like to quit
	input yes or press ctrl+c again to exit
`, (ans) => {
        if (ans.match(RegExp("^y(es|)"))) {
            exit()
        } else {
            rl.off("SIGINT", exit)
        }
	})
})
// if (argv.run == undefined && argv.interactive == false) {

// }
if (argv.run) {

}
if (argv.interactive) {
    rl.setPrompt("> ")
    rl.on("line", (line) => {
        let command = line.split(" ")[0]
        let argsRaw = line.replace(command, "").trim()
        let args = argsRaw.split(" ")
        let isCommand = false
        if (command == "num-sum") {
            isCommand = true
            if (args[0] === " " || args[0] == undefined) {
                console.error("Expected 1 argument, got 0")
                return
            } else if (args[1]) {
                console.log(`Expected 1 argument, got ${getObjectLength(args)}. Ignoring`)
            }
            // @ts-ignore
            if (isNaN(args[0])) {
                console.error(`${args[0]} is not a number`);
                return
            }
            let num = parseInt(args[0])
            console.log(numSum(num))
        }
        if (command == "counting-leaps") {
            isCommand = true
        }
        if (command == "n-factorial") {
            isCommand = true
            if (args[0] === " " || args[0] == undefined) {
                console.error("Expected 1 argument, got 0")
                return
            } else if (args[1]) {
                console.log(`Expected 1 argument, got ${getObjectLength(args)}. Ignoring`)
            }
            // @ts-ignore
            if (isNaN(args[0])) {
                console.error(`${args[0]} is not a number`);
                return 
            }
            let num = parseInt(args[0])
            console.log(nFractorial(num))
        }
        if (command == "high-low-average") {
            isCommand = true
        }
        if (command == "most-common-char") {
            isCommand = true
            console.log(new CommonChars(argsRaw))
        } 
        if (!isCommand) {
            console.log(`${command} is not a command`)
        }
    })
} else {
    process.exit(0)
}

function exit() {
    process.exit(0)
}
