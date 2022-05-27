const RustDocument = require("./document")
const Method = require("./method")
const fs = require("fs")
const documentsPath = "./documents/"

class Connection {
    constructor(path) {
        if (path) {
            documentsPath = path
            this.path = path
        }
    }
    CreateDocument = (connection, name) => {
        const path = documentsPath + name + ".json"
        if (fs.existsSync(path)) throw new Error("Document already exists.")
        if (name.endsWith(".json")) throw new Error("Remove .json extension from document name")

        try {
            return new RustDocument(name, path, this)
        } catch (err) {
            throw new Error(err)
        }
    }
    DocumentExists = (document) => {
        return fs.existsSync(documentsPath + document + ".json")
    }
    ReadDocument = (document) => {
        if (!fs.existsSync(documentsPath + document + ".json")) throw new Error("Document doesn't exist.")
        return JSON.parse(fs.readFileSync(documentsPath + document + ".json"))
    }
    GetDocument = (document) => {
        if (!fs.existsSync(documentsPath + document + ".json")) throw new Error("Document doesn't exist.")
        return new RustDocument(document, documentsPath + document + ".json", this)
    }
}

module.exports = { Connection, RustDocument, Method }