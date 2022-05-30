# RustDB
### Easy to use NoSQL database written entirely with Javascript and Node.js
#### (use in real world applications is not recommended)

RustDB is an in-development, NoSQL database written entirely with Javascript and Node.js. It is intended to be an extremely simple database software, without the hassle of setting up regular databases. 

It is also open-source (main reason why it's on here anyways), so create a pull-request or submit an issue if you have any suggestions :D

### RustDB Terminology
* Database - A directory that stores data
* Document - A .json file containing data inside of a database
* Group - A subdirectory in a database

<details>
    <summary markdown="span">Getting Started with the RustDB command line</summary>
    <h3>Getting Started (CLI)</h3>
    Before we start, make sure that you have all of the prerequisites below:
    <h4>Prerequisites</h4>
    <ul>
        <li>Installation of Node.js (<a href="https://nodejs.org/en/download/">download</a>)</li>
        <li>Basic knowledge on command line interfaces</li>
        <li>Knowledge on databases</li>
        <li>Knowledge on the JSON language</li>
    </ul>
    Great, let's start!
    <br>
    Creating a RustDB database is insanely simple. Start by downloading this repository, and running the console.bat file, this will open up the RustDB command line. 
    <br>
    Running "help" will list all avaliable commands that the RustDB console has to offer. Go ahead and let your curiosity roam around the list of commands.
    <br>
    <h4>Setting up a database</h4>
    Setting up a RustDB database is extremely simple, all you have to do is create a directory. Go ahead and create a directory anywhere and name it "LearnRustDB".
    <br>
    <h4>Connecting to a database</h4>
    With this new empty directory, go back inside of the RustDB command line and run the "connect" command with the path to this directory as the first argument. If all goes well, this will establish a RustDB connection to the directory allowing you to manipulate it.
    <br>
    Inside of the connection command line, you will be able to run the "help" command to list all database commands. These commands will be different from the ones in the normal command line.
    <br>
    If you'd like to break the RustDB connection, just run the "exit" command.
    <br>
    <h4>Manipulating a database</h4>
    With an established connection to a database, you are now able to read documents, create documents and groups, and delete documents. Basically you get it, you can completely manipulate the entire database.
    <br>
    <h5>Commands</h5>
    These commands are the commands that are used to manipulate a database:
    <br>
    <code>get (document)</code> - Reads a document in the database
    <br>
    <code>rm-doc (document)</code> - Removes a document
</details>
<br>
<details>
    <summary markdown="span">Getting started with the NPM package</summary>
    <h3>Getting started (NPM)</h3>
    Before we start, make sure that you have all of the prerequisites below:
    <h4>Prerequisites</h4>
    <ul>
        <li>Installation of Node.js (<a href="https://nodejs.org/en/download/">download</a>)</li>
        <li>Knowledge on Node.js and NPM</li>
        <li>Knowledge on databases</li>
        <li>Knowledge on the JSON language</li>
    </ul>
    Great, let's start.
    <br>
    Using the NPM version of RustDB allows you to become more flexible with the database tool. This allows you to treat the tool as a library that you can use in your code, rather than a shell command line.
    <br>
    <h4>Adding the module to your project</h4>
    To add RustDB as a module in your project, open a new terminal inside of your project's root directory. From here run the following commands
    <br>
    <code>npm init -y</code> (if NPM isn't already initiated in your project)
    <br>
    <code>npm i https://github.com/devrusty/RustDB</code>
    <br>
    <br>
    If the installation was successful, you should have the RustDB module in your <code>node_modules</code> folder.
    <br>
    <br>
    With this module in your project, we can now start using RustDB.
    <br>
    Opening a Javascript file, you will now be able to include RustDB as a module using this line of code
    <br>
    <code>const rustdb = require("rustdb")</code>
</details>