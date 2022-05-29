const RustDocument = require("./document")
const Method = require("./method")
const fs = require("fs")

let documentsPath

DocumentDoesntExist = (path) => { throw new Error("Document doesn't exist. : " + path) }
DocumentAlreadyExists = () => { throw new Error("Document already exists.") }
GroupDoesntExist = (path) => { throw new Error("Group doesn't exist. : " + path) }
GroupAlreadyExists = () => { throw new Error("Group already exists.") }

class Connection {
    constructor(path) {
        documentsPath = path
        this.path = path
    }
    CreateDocument = (name) => {
        const path = documentsPath + name + ".json"
        if (fs.existsSync(path)) DocumentAlreadyExists()
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
        if (!this.DocumentExists(document)) DocumentDoesntExist(documentsPath + "/" + document + ".json")
        return JSON.parse(fs.readFileSync(documentsPath + document + ".json", "utf-8"))
    }
    GetDocument = (document) => {
        if (!this.DocumentExists(document)) DocumentDoesntExist(documentsPath + "/" + document + ".json")
        return new RustDocument(document, documentsPath + document + ".json", this)
    }
    DeleteDocument = (document) => {
        if (!this.DocumentExists(document)) DocumentDoesntExist(documentsPath + "/" + document + ".json")
        fs.rmSync(documentsPath + document + ".json")
    }
    GroupExists = (group) => {
        return fs.existsSync(documentsPath + "/" + group)
    }
    CreateGroup = (group) => {
        if (this.GroupExists(group)) GroupAlreadyExists(documentsPath + "/" + group)
        fs.mkdirSync(documentsPath + "/" + group)
    }
}

module.exports = { Connection, RustDocument, Method }