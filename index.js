// TODO: Include packages needed for this application
// Standard library package for reading and writing files.
const fs = require('fs');

// Consts used for readme file work.
const readmeFileName = "./README.md";
const na = "N/A";  // Entered if there is nothing in a section.

// TODO: Create an array of questions for user input
const questions = ["Enter your project title.",
    "Enter a brief description of your project.",
    "Table of Contents.",
    "Enter the User Story.",
    "Enter the Acceptance Criteria.",
    "Enter the link address for the mockup image.",
    "Enter instructions for how to install and execute this project.",
    "Enter information about the usage of this project.",
    "Enter credits for collaborators (if applicable).",
    "Enter this project's license.",
    "Enter badges for this project.",
    "Enter features.",
    "Enter how to contribute to this application (if applicable).",
    "Enter tests welcome.",
    "Enter your GitHub username.",
    "Enter your email address"
];

// Headers for each section. Each section has a correlating question in the questions array.
const headers = ["# ",
    "## Description",
    '## Table of Contents',
    "### User Story",
    "### Acceptance Criteria",
    "### Mock Up",
    "## Installation/Execution",
    "## Usage",
    "## Credits",
    "## License",
    "## Badge(s)",
    "## Features",
    "## Contributing",
    "## Tests",
    "## Questions",
    "Email: "
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);

    // Check to see if the readme file has been created yet.
    // Use writeFile for new file
    // Use appendFile for existing file
    fs.appendFile(fileName, function(err) {
        if (err) {
            console.error(err);
            fs.writeFile(fileName, data, (err2)=>
            err2?console.error(err):console.log("success2"));
            console.log("in error");
            console.error(err);
        } else{
            //fs.appendFile(fileName, data);
            console.log("success");
        }
    });
 
//    if (fs.open(fileName)) {
//        fs.appendFile(fileName, data);
//    } else {
//        fs.writeFile(fileName, data);
//    }
}

// Prompt user for the readme file's contents
function promptUser() {

    for (var i = 0; i < questions.length; i++) {
        console.log(questions[i]);
        console.log(headers[i]);
    }
}

// TODO: Create a function to initialize app
function init() {
    promptUser();
    writeToFile(readmeFileName,"I am writing some data");
}

// Function call to initialize app
init();
