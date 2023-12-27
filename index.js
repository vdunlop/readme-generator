// TODO: Include packages needed for this application
// Standard library package for reading and writing files.
const fs = require('fs');
const readmeFileName = "./README.md";

// TODO: Create an array of questions for user input
const questions = ["Enter your project title.",
    "Enter a brief description of your project.",
    "Enter the steps required to install your project.",
    "Enter the User Story.",
    "Enter the Acceptance Criteria.",
    "Enter the link address for the mockup image.",
    "Enter instructions of how to install and execute this project.",
    "Enter information about the usage of this project.",
    "Enter credits for collaborators (if applicable).",
    "Enter this project's license.",
    "Enter badges for this project.",
    "Enter features.",
    "Enter how to contribute to this application (if applicable)."
    ];

const headers = ["# ",
    "## Description",
    "### User Story",
    "### Acceptance Criteria",
    "### Mock Up",
    "## Installation/Execution",
    "## Usage",
    "## Credits",
    "## License",
    "## Badge(s)",
    "## Features",
    "## How to Contribute"
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    // Check to see if the readme file has been created yet.
    // Use writeFile for new file
    // Use appendFile for file existing
    // if () {
    fs.appendFile(readmeFileName, data);    
    //    } else {
    fs.writeFile(readmeFileName, data);
    //      
}

// Prompt user for the readme file's contents
function promptUser(){

    for (var i=0; i<questions.length; i++){
        console.log(questions[i]);
    }
}

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
