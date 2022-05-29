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
        const args = cmd.split(" ")
        const command = args[0]

        if (command == "") {
            Command()
            return
        }

        switch (command) {
            case "help":
                const cmdQuery = args[1].toLowerCase()
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
                const documentReq = args[1]
                if (!documentReq) {
                    console.warn("Please enter a document to read.")
                    break
                }
                let documentsReq = fs.readdirSync(Db)
                //documents.forEach(doc => doc.toLowerCase())

                for (const doc of Object.keys(documentsReq)) {
                    if (documentsReq[doc] == document + ".json") {
                        const docContent = fs.readFileSync(Db + "\\" + documentReq + ".json")
                        console.log(documentReq + ":\n" + JSON.parse(docContent))
                    }
                }
                break
            case "rm-doc":
                const documentDel = args[1]
                if (!documentDel) {
                    console.warn("Please enter a document to remove.")
                    break
                }

                connection.DeleteDocument(documentDel)
                console.log("Deleted document " + documentDel + ".json")
                break
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
    Db = connection.path

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