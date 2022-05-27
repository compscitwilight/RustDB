const fs = require("fs")

Execute = (args) => {
    const cmd = args[1]
    const commandsDir = __dirname + "\\"

    let msg = ""
    if (cmd) {
        const commandPath = commandsDir + cmd + ".js"
        const commandData = require(commandPath)

        msg += `${commandData.Name} : ${commandData.Description} : Usage: ${commandData.Usage}`
        console.log(msg)
        return
    }

    const commands = fs.readdirSync(commandsDir)
    commands.forEach(cmd => {
        const commandData = require(__dirname + "\\" + cmd)
        msg += `${commandData.Name} : ${commandData.Description} : Usage: ${commandData.Usage}\n`
    })

    console.log(msg)
}

module.exports = {
    Name: "help",
    Description: "Lists all commands with a brief description on how to use them",
    Usage: "help <command>",
    Execute
}