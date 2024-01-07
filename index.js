// TODO: Include packages needed for this application
// Standard library package for reading and writing files.
const fs = require('fs');
const inquirer = require('inquirer');

// Include our js for generating the markdown file (README)
const generateMarkdown = require('./utils/generateMarkdown');

// Consts used for readme file work.
const readmeFileName = "./testREADME.md";
const na = "N/A";  // Entered if there is nothing in a section.

// TODO: Create an array of questions for user input
inquirer
    .prompt([
               {
                   type: 'input',
                   message: 'Enter your project title.',
                   name: 'projectTitle',
               },
 /*       {
            type: 'editor',
            message: 'Enter a brief description of your project. ',
            name: 'projectDescription',
        },
               {
                   type: 'editor',
                   message: 'Enter the User Story.',
                   name: 'userStory',
               },
               {
                   type: 'editor',
                   message: 'Enter the Acceptance Criteria.',
                   name: 'acceptCriteria',
               },
               {
                   type: 'input',
                   message: 'Enter the link address for the mockup image.',
                   name: 'linkToMockupImage',
               },
               {
                   type: 'editor',
                   message: 'Enter instructions for how to install and execute this project.',
                   name: 'instructions',
               },
               {
                   type: 'editor',
                   message: 'Enter information about the usage of this project.',
                   name: 'usageInformation',
               },
               {
                   type: 'editor',
                   message: 'Enter credits for collaborators (if applicable).',
                   name: 'collaboratorCredits',
                   default: 'N/A',
               },*/
        {
            type: 'list',
            message: 'Choose the license for your project.',
            choices: ['N/A', 'Apache License 2.0', 'GNU Gneral Public License v3.0',
                'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'GNU Affero General Public License v3.0',
                'Mozilla Public License 2.0', 'The Unlicense'],
            name: 'license',
        },
              /* {
                   type: 'editor',
                   message: "Enter badges for this project.",
                   name: 'badges',
                   default: 'N/A',
               },
               {
                   type: 'editor',
                   message: 'Enter features.',
                   name: 'projectFeatures',
                   default: 'N/A',
               },*/
        {
            type: 'list',
            message: 'Are contributions welcome?',
            name: 'contributionsWelcome',
            choices: ['yes','no'],
            default: 'no',
        },
        {
            type: 'list',
            message: 'Are tests welcome?',
            name: 'testsWelcome',
            choices: ['yes','no'],
            default: 'no',
        },
        {
            type: 'input',
            message: 'Enter your GitHub username.',
            name: 'gitUserName',
        },
        {
            type: 'input',
            message: 'Enter your email address.',
            name: 'emailAddress',
        },
    ])
    .then((responses) => {
      
console.log(responses);
const responseArr = [];
for (let i in responses) {
    responseArr.push([i,responses[i]]);
}
console.log(responseArr);
console.log(responseArr[0][1]);
generateMarkdown.renderLicenseSection(responses);
writeToFile(readmeFileName,responses);
//fs.writeFile(readmeFileName,responses.license,(err) => err ? console.log(err) : console.log('Success'));
//fs.writeFile(readmeFileName,JSON.stringify(responses.license),(err) => err ? console.log(err) : console.log('Success'));
        const projectTitle = `${responses.emailAddress.toLowerCase().split(' ').join('')}`;
        
        //console.log(answers);
        //console.log(`${responses.emailAddress}`);
        //fs.writeFile(readmeFileName,JSON.stringify(responses,null,'\t'),(err) =>
        //err ? console.log(err) : console.log('Success!')
        //);
    });

        //    fs.writeFile(filename, '${JSON.stringify(response, null, 2)}\n', (err) =>
        //     (err) ? console.error(err) : console.log('success'));
    //});

// Headers for each section. Each section has a correlating question in the questions array.
const headers = [
    "# ",   // this is the title
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
    "## Questions",           // email and GitHub name go here
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);

    // Use writeFile for the first write. This will either create the file and write the first line of it
    // or overwrite an old file. Eventually a check could be put in to see if you want the old file overwritten
    // The first line is always the title.
    const lineStr = headers[0] + data.projectTitle;
    fs.writeFile(readmeFileName, lineStr, (err) => err ? console.log(err) : console.log('title written'));
//    fs.writeFile(readmeFileName,responses.license,(err) => err ? console.log(err) : console.log('Success'));
        
    // Use appendFile for existing file
/*    fs.writeFile(fileName, function (err) {
        if (err) {
            console.error(err);
            fs.writeFile(fileName, data, (err2) =>
                err2 ? console.error(err) : console.log("success2"));
            console.log("in error");
            console.error(err);
        } else {
            fs.appendFile(fileName, data);
            console.log("success");
        }
    });*/

    //    if (fs.open(fileName)) {
    //        fs.appendFile(fileName, data);
    //    } else {
    //        fs.writeFile(fileName, data);
    //    }
}

// TODO: Create a function to initialize app
function init() {
    writeToFile(readmeFileName, "I am writing some data");
}

// Function call to initialize app
//init();
/////////////////////////////////////////////////////////////////
/* save for later??? */
/*  console.log('responses :>>' + responses.projectTitle);
        console.log('responses :>>' + responses.projectDescription);
        console.log('responses :>>' + responses.userStory);
        console.log('responses :>>' + responses.acceptCriteria);
        console.log('responses :>>' + responses.linkToMockupImage);
        console.log('responses :>>' + responses.instructions);
        console.log('responses :>>' + responses.usageInformation);
        console.log('responses :>>' + responses.collaboratorCredits);
        console.log('responses :>>' + responses.license);
        console.log('responses :>>' + responses.badges);
        console.log('responses :>>' + responses.projectFeatures);
        console.log('responses :>>' + responses.contributionsWelcome);
        console.log('responses :>>' + responses.testsWelcome);
        console.log('responses :>>' + responses.gitUserName);
        console.log('responses :>>' + responses.emailAddress);*/
