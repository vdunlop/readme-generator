// Include packages:
// Standard library package for reading and writing files.
// Inquirer for user input.
const fs = require("fs");
const inquirer = require("inquirer");

// Include our js for generating the markdown file (README).
const generateMarkdown = require("./utils/generateMarkdown");

// Consts used for readme file work.
const readmeFileName = "./testREADME.md";
const na = "N/A"; // Entered if there is nothing in a section.
const newLineReturnStr = "\r\n\r\n";

// Headers for each section. Each section has a correlating question from the prompt responses.
const headers = [
  "# ", // this is the title
  "## Description\n",
  "### User Story\n",
  "### Acceptance Criteria\n",
  "### Mock Up\n",
  "## Installation/Execution\n",
  "## Usage\n",
  "## Credits\n",
  "## License\n",
  "## Badge(s)\n",
  "## Features\n",
  "## Contributing\n",
  "## Tests\n",
  "## Questions\n", // email and GitHub name go here
];
const tocStr = "## Table of Contents\n";

// Initialize
function init() {
}

// This function writes the user input into the README file.
function writeToFile(fileName, data) {
  console.log(fileName);
  console.log(data);
  const responseArr = [];

  // Push user input into an array for easy handling.
  for (let i in data) {
    responseArr.push([i, data[i]]);
  }
  console.log(responseArr);

  // Use writeFile for the first write. This will either create the file and write the first line of it
  // or overwrite the existing file. Eventually a check could be put in to see if you want the old file overwritten.
  //
  // The first line is always the title.
  // generateMarkdown generates the markdown format for the title.
  // The title is doublespaced before the next heading.
  let lineStr = generateMarkdown.generateMarkdown(data) + newLineReturnStr;

  fs.writeFile(readmeFileName, lineStr, (err) =>
    err ? console.log(err) : console.log("title written")
  );

  // Continue at Description input (the second array position) and go through Questions as the last input answer.
  for (let responseArrPtr = 1; responseArrPtr < responseArr.length; responseArrPtr++) {
    console.log("arrptr = " + responseArrPtr);
    console.log("length of arr = " + responseArr.length);

    switch (responseArr[responseArrPtr][0]) {
        case 'license' :
            lineStr = headers[responseArrPtr] + generateMarkdown.renderLicenseSection(responseArr[responseArrPtr][1]) + newLineReturnStr;
            //generateMarkdown.renderLicenseSection(responseArr[responseArrPtr][1]);
            break;
        default:
            lineStr = headers[responseArrPtr] + responseArr[responseArrPtr][1] + newLineReturnStr;
    }
    console.log("linestr = " + lineStr);
    fs.appendFile(readmeFileName, lineStr, (err) =>
      err ? console.log(err) : console.log(responseArrPtr + " written")
    );
  }
}

// Questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your project title.",
      name: "title",
    },
    {
      type: "editor",
      message: "Enter a brief description of your project. ",
      name: "projectDescription",
    },
    {
      type: "editor",
      message: "Enter the User Story.",
      name: "userStory",
    },
    {
      type: "editor",
      message: "Enter the Acceptance Criteria.",
      name: "acceptCriteria",
    },
    {
      type: "input",
      message: "Enter the link address for the mockup image.",
      name: "linkToMockupImage",
    },
    {
      type: "editor",
      message:
        "Enter instructions for how to install and execute this project.",
      name: "instructions",
    },
    {
      type: "editor",
      message: "Enter information about the usage of this project.",
      name: "usageInformation",
    },
    {
      type: "editor",
      message: "Enter credits for collaborators (if applicable).",
      name: "collaboratorCredits",
      default: "N/A",
    },
    {
      type: "list",
      message: "Choose the license for your project.",
      choices: [
        "N/A",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "GNU Affero General Public License v3.0",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
      name: "license",
    },
    /*{
      type: "editor",
      message: "Enter badges for this project.",
      name: "badges",
      default: "N/A",
    },
    {
      type: "editor",
      message: "Enter features.",
      name: "projectFeatures",
      default: "N/A",
    },
    {
      type: "list",
      message: "Are contributions welcome?",
      name: "contributionsWelcome",
      choices: ["yes", "no"],
      default: "no",
    },
    {
      type: "list",
      message: "Are tests welcome?",
      name: "testsWelcome",
      choices: ["yes", "no"],
      default: "no",
    },*/
    {
      type: "input",
      message: "Enter your GitHub username.",
      name: "gitUserName",
    },
    {
      type: "input",
      message: "Enter your email address.",
      name: "emailAddress",
    },
  ])
  .then((responses) => {
    init();
    console.log(responses);

    // Format and write responses to the README file.
    writeToFile(readmeFileName, responses);
  });

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
//fs.writeFile(readmeFileName,responses.license,(err) => err ? console.log(err) : console.log('Success'));
//fs.writeFile(readmeFileName,JSON.stringify(responses.license),(err) => err ? console.log(err) : console.log('Success'));
//const projectTitle = `${responses.emailAddress.toLowerCase().split(' ').join('')}`;

//console.log(answers);
//console.log(`${responses.emailAddress}`);
//fs.writeFile(readmeFileName,JSON.stringify(responses,null,'\t'),(err) =>
//err ? console.log(err) : console.log('Success!')
//);

//    fs.writeFile(filename, '${JSON.stringify(response, null, 2)}\n', (err) =>
//     (err) ? console.error(err) : console.log('success'));
//});
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
