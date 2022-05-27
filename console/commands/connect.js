const fs = require("fs")
const { Connection } = require("../../index")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

let Db

Command = () => {
    readline.question(Db + "> ", cmd => {
        const command = cmd.toLowerCase()

        if (command == "help") {
            console.log("Database commands:\n get : Gets a document")
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
    const connection = new Connection(connectionPath)
    rl.close()
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