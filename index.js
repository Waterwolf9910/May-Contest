#!/usr/bin/env node
// @ts-check
const yargs = require("yargs/yargs")
const fs = require("fs")
const numSum = require("./num-sum").numSum
const countLeaps = require("./counting-leaps").countLeaps
const nFractorial = require("./n-factorial.js").nFractorial
const average = require("./high-low-average").average
const CommonChars = require("./most-common-char").CommonChars
const { hideBin } = require("yargs/helpers")
const yarg = yargs(hideBin(process.argv))
// let program_name = yarg.argv.$0
const argvRaw = yarg
.option("interactive", {
    alias: "i",
    boolean: true,
    describe: "Runs command then allows other commands to be inputed",
    default: false
})
.option("help", {
    alias: ["h", "commands"],
    describe: "Shows this message",
    boolean: true
})
.help("help")
.option("version", {
    alias: "V",
    describe: `Show version number of program`,
    boolean: true
}).option("verbose", {
    alias: ["v"],
    describe: "Prints more information about what is running",
    boolean: true,
    count: true
})
.option("err_to_file", {
    alias: "ef",
    describe: "Writes eval errors to file",
    boolean: true,
    implies: "efile_name",
    default: false
})
.option("efile_name" ,{
    alias: "efn",
    describe: "Name of the error file",
    default: "error.txt",
    string: true
})
.option("remove_extra", {
    alias: ["r", "re"],
    describe: "Removes some user accessiblity from output",
    default: false,
    boolean: true
})
.option("json", {
    alias: ["j", "java_script_object_notation"],
    describe: "Format output to json format",
    boolean: true,
    default: false
})
.command("run", "runs a command from a module", (cmd) => {
    cmd.options({
        sum_num: {
            conflicts: [ "counting_leaps" || "n_factorial" || "averages" || "common_char_m" || "common_char_l"],
            implies: "args",
            boolean: true,
            group: "Program Commands",
            describe: "Prints out the sum of(number) and its consecative numbers"
        },
        counting_leaps: {
            conflicts: [ "sum_num" || "n_factorial" || "averages" || "common_char_m" || "common_char_l"],
            implies: "args",
            boolean: true,
            group: "Program Commands",
            describe: "Prints out the amount of leap years from (start year) to (end year)"
        },
        n_factorial: {
            conflicts: ["sum_num" || "counting_leaps" || "averages" || "common_char_m" || "common_char_l"],
            implies: "args",
            boolean: true,
            group: "Program Commands",
            describe: "Prints out the product of (number) and its consecuative numbers"
        },
        averages: {
            conflicts: ["sum_num" || "counting_leaps" || "n_factorial" || "common_char_m" || "common_char_l"],
            implies: "args",
            boolean: true,
            group: "Program Commands",
            describe: "Prints out the average of a list of numbers"
        },
        common_char_m: {
            conflicts: ["sum_num" || "counting_leaps" || "n_factorial" || "averages" || "common_char_l"],
            implies: "args",
            boolean: true,
            group: "Program Commands",
            describe: "Prints out the most common characters in a string of text"
        },
        common_char_l: {
            conflicts: ["sum_num" || "counting_leaps" || "n_factorial" || "averages" || "common_char_m"],
            implies: "args",
            boolean: true,
            group: "Program Commands",
            describe: "Prints out the most common characters in a string of text"
        }
    }).option("args", {
        array: true,
        group: "Program Commands",
        describe: "arguments for the above commands"
    })
    .check((argsv) => {
        let hasRequired = false
        let hasArgs = false
        let isInteractive = false
        if (argsv.args !== undefined) {
            hasArgs = true
        }
        if (hasArgs) {
            if (argsv.args[0] !== undefined) {
                hasArgs = true
            } else {
                hasArgs = false
            }
        }
        if (!hasArgs) {
            if (!argsv.interactive) {
                throw new Error("Missing required argument: args")
            } else {
                if (argsv.sum_num || argsv.counting_leaps || argsv.n_factorial || argsv.averages || argsv.common_char_l || argsv.common_char_m) {
                    throw new Error("Missing required argument: args")
                }
                isInteractive = true
            }
        }
        if (argsv.sum_num) {
            hasRequired = true
            if (argsv.remove_extra) {
                // @ts-ignore
                console.log(numSum(argsv.args[0], argsv.verbose, argsv.json))
            } else {
                console.log("Running sum_num")
                // @ts-ignore
                console.log(numSum(argsv.args[0], argsv.verbose, argsv.json))
            }
        }
        if (argsv.counting_leaps) {
            hasRequired = true
            let endyear
            if (argsv.args[1] == undefined) {
                let endyear = new Date().getFullYear()
            } else {
                endyear = argsv.args[1]
            }
            if (argsv.remove_extra) {
                // @ts-ignore
                console.log(countLeaps(argsv.args[0], endyear, argsv.verbose, argsv.json))
            } else {
                console.log("Running counting-leaps")
                // @ts-ignore
                console.log(countLeaps(argsv.args[0], endyear, argsv.verbose, argsv.json))
            }
        }
        if (argsv.n_factorial) {
            hasRequired = true
            if (argsv.remove_extra) {
                // @ts-ignore
                console.log(nFractorial(argsv.args[0], argsv.verbose, argsv.json))
            } else {
                console.log("Running n-factorial")
                // @ts-ignore
                console.log(nFractorial(argsv.args[0], argsv.verbose, argsv.json))
            }
        }
        if (argsv.averages) {
            hasRequired = true
            if (argsv.remove_extra) {
                console.log()
            } else {
                console.log("Running high-low-average")
            }
        }
        if (argsv.common_char_l) {
            hasRequired = true
            if (argsv.remove_extra) {
                // @ts-ignore
                console.log(new CommonChars(argsv.args[0], argsv.verbose, argsv.json).least_common())
            } else {
                console.log("Running least-commmon-characters")
                // @ts-ignore
                console.log(new CommonChars(argsv.args[0], argsv.verbose, argsv.json).least_common())

            }
        }
        if (argsv.common_char_m) {
            hasRequired = true
            if (argsv.remove_extra) {
                // @ts-ignore
                console.log(new CommonChars(argsv.args[0], argsv.verbose, argsv.json).most_common())
            } else {
                console.log("Running most-common-characters")
                // @ts-ignore
                console.log(new CommonChars(argsv.args[0], argsv.verbose, argsv.json).most_common())
            }
        }
        if (!hasRequired) {
            if (!argsv.interactive) {
                throw new Error('Requires an option under "Program Commands"')
            } else {
                isInteractive = true
            }
        }
        return hasRequired || isInteractive
    })
    
})
.demandCommand(1, "Requires one valid non-option argument (command)")
.completion()
//.exitProcess(false)
const argv = argvRaw.argv
if (argv.verbose > 1) {
    console.log(argv)
}

function getObjectLength(obj) {
    let length = 0
    for (let i in obj) {
        if (Object.hasOwnProperty.call(obj, i)) length++
    }
    return length
}
let commands = ["run"]
let isValid = false
for (let i in commands) {
    if (argv._.includes(commands[i])) {
        isValid = true
    }
}
if (!isValid) {
    throw new Error("Requires one valid non-option argument (commmand)")
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
if (argv.interactive) {
    console.log(`Welcome
for help run help
for usage run usage command`)
    rl.setPrompt("> ")
    rl.on("line", (line) => {
        let command = line.split(" ")[0]
        let argsRaw = line.replace(command, "").trim()
        let args = argsRaw.split(" ")
        let isCommand = false
        if (command == "num_sum") {
            isCommand = true
            if (args[0] === " " || args[0] == undefined) {
                console.error("Expected 1 argument, got 0")
                return
            } else if (args[3]) {
                console.log(`Expected 1 argument, got ${getObjectLength(args)}. Ignoring`)
            }
            // @ts-ignore
            if (isNaN(args[0])) {
                console.error(`${args[0]} is not a number`);
                return
            }
            // // @ts-ignore
            // if (isNaN(args[1]) && !(args[1] == undefined)) {
            //     console.error(`${args[1]} is not a number`)
            // }
            // if (!(args[2] == "true") && !(args[2] == undefined)) {
            //     console.error()
            // } else {
            //     json = true
            // }
            let num = parseInt(args[0])
            console.log(numSum(num, argv.verbose, argv.json))
        }
        if (command == "counting_leaps") {
            isCommand = true
            if (args[0] === " " || args[0] == undefined) {
                console.error("Expected 1 argument, got 0")
                return
            } else if (args[2]) {
                console.log(`Expected 1-2 argument, got ${getObjectLength(args)}. Ignoring`)
            }
            // @ts-ignore
            if (isNaN(args[0])) {
                console.error(`${args[0]} is not a number`);
                return
            }
            // @ts-ignore
            if (isNaN(args[1]) && args[1] !== undefined) {
                console.error(`${args[1]} is not a number`)
                return
            }
            let year = parseInt(args[0])
            let endyear = parseInt(args[1])
            console.log(countLeaps(year, endyear, argv.verbose, argv.json))
        }
        if (command == "n_factorial") {
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
            console.log(nFractorial(num, argv.verbose, argv.json))
        }
        if (command == "average") {
            isCommand = true
            let allow = true
            if (args[0] === " " || args[0] == undefined) {
                console.error("Expected 1 argument, got 0")
                return
            }
            for (const i in args) {
                if (Object.hasOwnProperty.call(args, i)) {
                    // @ts-ignore
                    if (isNaN(args[i])) {
                        console.error(`${args[i]} is not a number`);
                        allow = false
                        return
                    }
                }
            }
            if (allow) {
                // @ts-ignore
                console.log(average(args, argv.verbose, argv.json))
            }
        }
        if (command == "most_common_char") {
            isCommand = true
            console.log(new CommonChars(argsRaw, argv.verbose, argv.json).most_common())
        }
        if (command == "least_common_char") {
            isCommand = true
            console.log(new CommonChars(argsRaw, argv.verbose, argv.json).least_common())
        }
        if (command == "help") {
            isCommand = true
            console.log(`Commands:
    sum_num <number>:
        Prints out the sum of (number) and its consecative numbers
    counting_leap <start year> [end year]:
        Prints out the amount of leap years from (start year) to (end year)
    n_factorial <number>:
        Prints out the product of (number) and its consecuative numbers
    averages <number> [...list of numbers]:
        Prints out the average of a list of numbers
    most_common_char <charcter> [...list of characters]:
        Prints out the most common characters in a string of text
    least_common_char <charcter> [...list of characters]:
        Prints out the most common characters in a string of text
`)
        }
        if (command == "exit") {
            isCommand = true
            exit()
        }
        if (command == "usage") {
            isCommand = true
            let subCommand = args[0]
            let isSubCommand = false
            if (args[0] === " " || args[0] == undefined) {
                console.error("Expected 1 argument, got 0")
                return
            }
            if (subCommand == "num_sum") {
                isSubCommand = true
                console.log(`num_sum 10
    will return 55`)
            }
            if (subCommand == "counting_leaps") {
                isSubCommand = true
                console.log(`counting_leaps 2012 2021
    will return 2`)
            }
            if (subCommand == "n_factorial") {
                isSubCommand = true
                console.log(`n_factorial 10
    will return 3628800`)
            }
            if (subCommand == "average") {
                isSubCommand = true
                console.log(`average 10 2 41568 2581 852 87 68 28 5 7 3 84169 28
    will return 41568`)
            }
            if (subCommand == "most_common_char") {
                isSubCommand = true
                console.log(`most_common_char this is a test sentence to make sure this works properally
    will return 'space: 10'`)
            }
            if (subCommand == "least_common_char") {
                isSubCommand = true
                console.log(`least_common_char this is a test sentence to make sure this works properally
    will return 'c: 1 & m: 1 & u: 1 & w: 1 & y: 1'`)
            }
            if (!isSubCommand) {
                console.log(`${subCommand} is not a command`)
            }
        }
        if (command == "eval") {
            isCommand = true
            console.log(`running "${line.replace("eval", "").trim()}"`)
            try {
                eval(line.replace("eval", "").trim())
            } catch (err) {
                if (argv.err_to_file) {
                    console.log(`Error evaluation: ${line}`)
                    fs.writeFileSync(argv.efile_name, `${line}: ${err}\n`)
                } else {
                    console.error(`Error evalutating: ${line}
    Tracelog:
        ${err}`)
                }
            }
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
