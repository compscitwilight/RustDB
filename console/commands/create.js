const fs = require("fs")
const path = require("path")
const { Connection } = require("../..")

Execute = (args, rl) => {
    let type = args[1]
    let path = args[2]
    if (!type) {
        console.warn("Please provide a type.")
        return
    }
    if (!path) {
        console.warn("Please provide a path to where the " + type + " will be created at.")
        return
    }
    if (fs.existsSync(path)) {
        console.warn(type + " already exists @ " + path + "!")
        return
    }
    type = type.toLowerCase()

    switch (type) {
        case ("database"):
            const newDatabase = fs.mkdirSync(path)
            console.log("Created database @ " + path)
            break
        case ("group"):
            const db = path.substring(0, path.lastIndexOf("\\"))
            const group = fs.mkdirSync(path)
            console.log("Created group in database " + db + " @ " + path)
            break
        default:
            console.warn("Invalid type")
            break
    }
}

module.exports = {
    Name: "create",
    Description: "Creates a RustDB database that is ready to use",
    Usage: "create <type> <path>",
    Execute
}