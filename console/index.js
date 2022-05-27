const fs = require("fs")
const { Connection } = require("../index")
let rustDbConnection = new Connection()

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

function Command() {
    readline.question("> ", cmd => {
        const command = cmd.toLowerCase()
        const args = command.split(" ")
        const scriptPath = __dirname + "\\commands\\" + args[0] + ".js"

        if (command == "exit") process.exit()
        if (command == "") {
            Command()
            return
        }
        if (!fs.existsSync(scriptPath)) {
            console.warn("Invalid command \"" + command + "\". Run \"help\" to see a list of avaliable commands.")
            Command()
            return
        }

        const script = require(scriptPath)
        script.Execute(args, readline)

        Command()
    })
}

const Start = () => {
    console.log("Run a command or type \"help\" to list all commands")
    Command()
}

Start()