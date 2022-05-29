const fs = require("fs")
const config = require("../config.json")
const { Connection } = require("../index")
let rustDbConnection = new Connection()

const readline = require("readline")
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function Command() {
    readlineInterface.question("> ", cmd => {
        const command = cmd
        const args = command.split(" ")
        args[0].toLowerCase()

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
        script.Execute(args, readlineInterface)

        Command()
    })
}

const Start = () => {
    console.log("Run a command or type \"help\" to list all commands")
    Command()
}

Start()