const RustDocument = require("./document")
const Method = require("./method")
const fs = require("fs")

DocumentDoesntExist = (path) => { throw new Error("Document doesn't exist. : " + path) }
DocumentAlreadyExists = () => { throw new Error("Document already exists.") }
GroupDoesntExist = (path) => { throw new Error("Group doesn't exist. : " + path) }
GroupAlreadyExists = () => { throw new Error("Group already exists.") }

class Connection {
    constructor(path) {
        if (!path.endsWith("/")) path += "/"
        this.path = path
    }
    CreateDocument = (name) => {
        const path = this.path + name + ".json"
        if (fs.existsSync(path)) DocumentAlreadyExists()
        if (name.endsWith(".json")) throw new Error("Remove .json extension from document name")

        try {
            return new RustDocument(name, path, this)
        } catch (err) {
            throw new Error(err)
        }
    }
    DocumentExists = (document) => {
        return fs.existsSync(this.path + document + ".json")
    }
    ReadDocument = (document) => {
        if (!this.DocumentExists(document)) DocumentDoesntExist(this.path + document + ".json")
        return JSON.parse(fs.readFileSync(this.path + document + ".json", "utf-8"))
    }
    GetDocument = (document) => {
        if (!this.DocumentExists(document)) DocumentDoesntExist(this.path + document + ".json")
        return new RustDocument(document, this.path + document + ".json", this)
    }
    DeleteDocument = (document) => {
        if (!this.DocumentExists(document)) DocumentDoesntExist(this.path + document + ".json")
        fs.rmSync(this.path + document + ".json")
    }
    GroupExists = (group) => {
        return fs.existsSync(this.path + group)
    }
    CreateGroup = (group) => {
        if (this.GroupExists(group)) GroupAlreadyExists(this.path + group)
        fs.mkdirSync(this.path + group)
    }
}

module.exports = { Connection, RustDocument, Method }