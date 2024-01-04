// TODO: Include packages needed for this application
// Standard library package for reading and writing files.
const fs = require('fs');
const inquirer = require('inquirer'); 

// Consts used for readme file work.
const readmeFileName = "./README.md";
const na = "N/A";  // Entered if there is nothing in a section.

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type:'input',
            message: 'Enter your project title.',
            name: 'projectTitle',
        },
        {
            type:'input',
            message: 'Enter a brief description of your project.',
            name: 'projectDescription',
        },
        {
            type:'input',
            message: 'Enter the User Story.',
            name: 'userStory',
        },
        {
            type:'input',
            message: 'Enter the Acceptance Criteria.',
            name: 'acceptCriteria',
        },
        {
            type:'input',
            message: 'Enter the link address for the mockup image.',
            name: 'linkToMockupImage',
        },
        {
            type:'input',
            message: 'Enter instructions for how to install and execute this project.',
            name: 'instructions',
        },
        {
            type:'input',
            message: 'Enter information about the usage of this project.',
            name: 'usageInformation',
        },
        {
            type:'input',
            message: 'Enter credits for collaborators (if applicable).',
            name: 'collaboratorCredits',
        },
        {
            type:'input',
            message: "Enter badges for this project.",
            name: 'badges',
        },
        {
            type:'input',
            message: 'Enter features.',
            name: 'projectFeatures',
        },
        {
            type:'checkbox',
            message: 'Are contributions welcome?',
            name: 'contributionsWelcome',
            choices: ["yes","no"],
        },
        {
            type:'checkbox',
            message: 'Are tests welcome?',
            name: 'testsWelcome',
            choices: ["yes","no"],
        },
        {
            type:'input',
            message: 'Enter your GitHub username.',
            name: 'gitUserName',
        },
        {
            type:'input',
            message: 'Enter your email address.',
            name: 'emailAddress',
        },
    ])
     .then((responses) => {
        console.log('responses :>>' + responses);
    //    const answers = '${response.name.toLowerCase()}.json';
    //    fs.writeFile(filename, '${JSON.stringify(response, null, 2)}\n', (err) =>
     //     (err) ? console.error(err) : console.log('success'));
      });

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
//init();
