// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "Apache 2.0"){
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "GNU General Public v3.0"){
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "BSD 2-Clause 'Simplified'"){
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    } else if (license === "`BSD 3-Clause 'New' or 'Revised'"){
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (license === "Boost Software 1.0"){
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (license === "Creative Commons Zero v1.0 Universal"){
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    } else if (license === "Eclipse Public 1.0"){
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    } else if (license === "GNU Affero General Public v3.0"){
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (license === "GNU General Public v2.0"){
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    } else if (license === "Mozilla Public 2.0") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else {
      return "";
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "Apache 2.0"){
      return "https://www.apache.org/licenses/LICENSE-2.0";
    } else if (license === "GNU General Public v3.0"){
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    } else if (license === "MIT"){
      return "https://opensource.org/licenses/MIT";
    } else if (license === "BSD 2-Clause 'Simplified'"){
      return "https://opensource.org/licenses/BSD-2-Clause";
    } else if (license === "BSD 3-Clause 'New' or 'Revised'"){
      return "https://opensource.org/licenses/BSD-3-Clause";
    } else if (license === "Boost Software 1.0"){
      return "https://opensource.org/licenses/BSL-1.0";
    } else if (license === "Creative Commons Zero v1.0 Universal"){
      return "https://creativecommons.org/publicdomain/zero/1.0/";
    } else if (license === "Eclipse Public 1.0"){
      return "https://www.eclipse.org/legal/epl-v10.html";
    } else if (license === "GNU Affero General Public v3.0"){
      return "https://www.gnu.org/licenses/agpl-3.0.en.html";
    } else if (license === "GNU General Public v2.0"){
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    } else if (license === "Mozilla Public 2.0") {
      return "https://www.mozilla.org/en-US/MPL/2.0/";
    } else {
      return "";
    }
}


// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        default: "Project Title",
        validate: confirm, 
    },
    // Description 
    {
        type: "input",
        name: "description",
        message: "Please write a description for your project?",
        validate: confirm, 
        default: "Description",
    },
    // Installation instructions
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for the software?",
        default: "Installation",
        validate: confirm,
    },
    // Usage information
    {
        type: "input",
        name: "usage",
        message: "How can someone use this program?",
        default: "Usage",
        validate: confirm,
    },
    // License
    {
        type: "list",
        name: "license",
        message: "Please selest a license for your project.",
        choices: [
            "Apache 2.0",
            "GNU General Public v3.0",
            "MIT",
            "BSD 2-Clause 'Simplified'",
            "BSD 3-Clause 'New' or 'Revised'",
            "Boost Software 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public 2.0",
            "GNU Affero General Public v3.0",
            "GNU General Public v2.0",
            "GNU Lesser General Public v2.1",
            "Mozilla Public 2.0",
            "None",
        ],
        // validate: confirm,
    },
    // Contribution guidelines
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to this project?",
        default: "Contributing",
        validate: confirm,
    },
    // Test Instructions
    {
        tyope: "input",
        name: "tests",
        message: "Please explain the test instructions for your project?",
        default: "Tests",
        validate: confirm,
    },
    // Username
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        default: "GitHub username",
        validate: confirm,
    },
    // Email
    {
        type: "input",
        name: "email",
        message: "What is your GitHub email address that contributors may contact?",
        default: "Email",
        validate: confirm,
    }
];


function confirm (value) {
    if (value != "") {
        return true;
    } else {
        return "Please do not leave the questions blank."
    }
}


// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    fs.writeFile(fileName, generateMarkdown(response), function (err) {
        if (err) {
            return console.log(err);
        }
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        response.renderLicenseBadge = renderLicenseBadge(response.license);
        response.renderLicenseLink = renderLicenseLink(response.license);
        writeToFile("./output/newREADME.md", response);
    });
}

// Function call to initialize app
init();