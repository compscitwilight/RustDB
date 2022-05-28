# RustDB
### Easy to use NoSQL database written entirely with Javascript and Node.js

RustDB is an in-development, NoSQL database written entirely with Javascript and Node.js. It is intended to be an extremely simple database software, without the hassle of setting up regular databases. 

It is also open-source (main reason why it's on here anyways), so create a pull-request or submit an issue if you have any suggestions :D

### RustDB Terminology
Database - A directory that can be connected to via the Connection class and a path parameter
Document - A .json file containing information
Group - A subdirectory in a database

### Getting Started
Before we start, make sure that you have all of the prerequisites below:
#### Prerequisites
* Installation of Node.js (<a href="https://nodejs.org/en/download/">download</a>)
* Basic knowledge on command line interfaces
* Knowledge on databases
* Knowledge on the JSON language

Great, let's start!

Creating a RustDB database is insanely simple. Start by downloading this repository, and running the console.bat file, this will open up the RustDB command line. 

Running "help" will list all avaliable commands that the RustDB console has to offer. Go ahead and let your curiosity roam around the list of commands.

#### Setting up a database
Setting up a RustDB database is extremely simple, all you have to do is create a directory. Go ahead and create a directory anywhere and name it "LearnRustDB".

With this new empty directory, go back inside of the RustDB command line and run the "connect" command with the path to this directory as the first argument. If all goes well, this will establish a RustDB connection to the directory allowing you to manipulate it.

Inside of the connection command line, you will be able to run the "help" command to list all database commands. These commands will be different from the ones in the normal command line.

If you'd like to break the RustDB connection, just run the "exit" command.