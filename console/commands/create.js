const fs = require("fs")

Execute = (args, rl) => {
    const path = args[1]
    if (!path) {
        console.warn("Please provide a path to where the database will be created at.")
        return
    }
    if (fs.existsSync(path)) {
        console.warn("Database already exists @ " + path + "!")
        return
    }

    const newDatabase = fs.mkdirSync(path)
    console.warn("Created database @ " + path)
}

module.exports = {
    Name: "create",
    Description: "Creates a RustDB database that is ready to use",
    Usage: "create <path>",
    Execute
}