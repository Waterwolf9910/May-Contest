const yargs = require("yargs/yargs")
const num_sum = require("./num-sum")
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

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ""
})
rl.on("SIGINT", () => {
    rl.on("SIGINT", () => {
        process.exit(0)
    })
    rl.question(`Are you sure you would like to quit
	input yes or press ctrl+c again to exit`, (ans) => {
        if (ans.match(RegExp("^y(es|)"))) {

        }
	})
})

if (argv.interactive) {
    rl.on("line", (line) => {
        let command = line.split(" ")[0]
        let args = line.split(" ").slice(1)
        if (command == "num-sum") {

        }
        if (command == "counting-leaps") {

        }
        if (command == "n-factorial") {

        }
        if (command == "high-low-average") {

        }
        if (commnad == "most-common-char") {

        }
    })
}
