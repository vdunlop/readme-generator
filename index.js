// Include packages:
// Standard library package for reading and writing files.
// Inquirer for user input.
const fs = require("fs");
const inquirer = require("inquirer");

// Include our js for generating the markdown file (README).
const generateMarkdown = require("./utils/generateMarkdown");

// Consts used for readme file work.
const readmeFileName = "./README.md";
const na = "N/A"; // Entered if there is nothing in a section.
const newLineReturnStr = "\r\n\r\n";
const tocHeader = "## Table of Contents\n";

// Headers for each section. Each section has a correlating question from the prompt responses.
const headers = [
  "# ", // this is the title
  "## Description",
  "### User-Story",
  "### Acceptance-Criteria",
  "### Mock-Up",
  "## Installation-Execution",
  "## Usage",
  "## Credits",
  "## License",
  "## Features",
  "## Contributing",
  "## Tests",
  "## Questions", // email and GitHub name go here
];

// This function formats and writes the user input to the README file.
function writeToFile(fileName, data) {
  const responseArr = [];

  // Push user input into an array for easy handling.
  for (let i in data) {
    responseArr.push([i, data[i]]);
  }

  // Process Title
  // The first line in README is always the title.
  let readmeText = generateMarkdown.generateMarkdown(data) + newLineReturnStr;

  // The title is followed by the badges.
  readmeText +=
    generateMarkdown.renderLicenseBadge(data.license) +
    generateMarkdown.renderLicenseLink(data.license) +
    newLineReturnStr;

  // Process Table of Contents
  readmeText +=
    generateMarkdown.renderTOCSection(tocHeader, headers) + newLineReturnStr;

  // Continue at Description (the second data input) and go through Questions as the last input answer.
  for (
    let responseArrPtr = 1;
    responseArrPtr < responseArr.length;
    responseArrPtr++
  ) {
    switch (responseArr[responseArrPtr][0]) {
      case "gitUserName":
        readmeText +=
          headers[responseArrPtr] +
          newLineReturnStr +
          generateMarkdown.renderQuestionsSection(data);

        break;
      case "emailAddress":
        break; // was handled in 'gitUserName'
      default:
        readmeText +=
          headers[responseArrPtr] +
          newLineReturnStr +
          responseArr[responseArrPtr][1] +
          newLineReturnStr;
    }
  }

  // Write the formatted input to the readme file.
  fs.writeFile(fileName, readmeText, (err) =>
    err ? console.log(err) : console.log("README written.")
  );
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
    },
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
    // Format and write responses to the README file.
    writeToFile(readmeFileName, responses);
  });
