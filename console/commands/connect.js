const fs = require("fs")
const { Connection } = require("../../index")

let readline
let commandDescriptions = {
    help: "Displays all avaliable commands, their usage, and what they do. : Usage: help <?command>"
}
let connection
let Db

Command = () => {
    readline.question(Db + "> ", cmd => {
        const args = cmd.toLowerCase().split(" ")
        const command = args[0]

        if (command == "") {
            Command()
            return
        }

        switch (command) {
            case "help":
                const cmdQuery = args[1]
                if (cmdQuery) {
                    console.log(commandDescriptions[cmdQuery])
                    break
                }

                for (const cmd of Object.keys(commandDescriptions)) {
                    console.log(cmd + " : " + commandDescriptions[cmd] + "\n")
                }
                break
            case "exit":
                process.exit()
            case "get":

            default:
                console.warn("Invalid command \"" + command + "\". Run \"help\" to see a list of avaliable commands.")
                break
        }

        Command()
    })
}

Execute = (args, rl) => {
    const connectionPath = args[1]
    if (!connectionPath) {
        console.warn("Please provide the path for the RustDB connection")
        return
    }
    if (!fs.existsSync(connectionPath)) {
        console.warn("The path entered does not exist. : " + connectionPath)
        return
    }
    connection = new Connection(connectionPath)
    readline = rl
    console.clear()

    console.log("Connecting to " + connectionPath + "...")
    Db = connectionPath

    console.log("Connected!")
    console.log("Type \"help\" to view the avaliable commands; Type \"exit\" to exit this command line")
    Command()
}

module.exports = {
    Name: "connect",
    Description: "Connects to a new RustDB connection",
    Usage: "connect <path>",
    Execute
}