const fs = require("fs")

class RustGroup {
    constructor(db, name, path) {
        this.db = db
        this.name = name
        this.path = path

        fs.mkdirSync(this.path)
    }
}

module.exports = RustGroup