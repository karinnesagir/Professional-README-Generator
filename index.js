// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Markdown JS file
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: confirm, 
    },
    // Description 
    {
        type: "input",
        name: "description",
        message: "What is a description of your project?",
        validate: confirm, 
    },
    // Installation instructions
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for the software?",
        validate: confirm,
    },
    // Usage information
    {
        type: "input",
        name: "usage",
        message: "How can someone use this program/project?",
        validate: confirm,
    },
    // License
    {
        type: "list",
        name: "license",
        message: "Please selest a license for this project.",
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
        ],
        validate: confirm,
    },
    // Contribution guidelines
    {
        type: "input",
        name: "contribution",
        message: "How can users contribute to this project?",
        validate: confirm,
    },
    // Test Instructions
    {
        tyope: "input",
        name: "test",
        message: "What are the test instructions for your project?",
        validate: confirm,
    },
    // Username
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: confirm,
    },
    // Email
    {
        type: "input",
        name: "email",
        message: "What is your GitHub email address that contributors may contact?",
        // validate: function (value) {
        //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        //         return true;
        //     } else {
        //         return "Not a valid email address. Please enter a valid email address.";
        //     }
        // },
    }
];


function confirm (value) {
    if (value != "") {
        return true;
        // return "Please do not leave the questions blank"
    } else {
        // return true;
        return "Please do not leave the questions blank"

    }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getLicense = getLicense(data.license);
        writeToFile("./example/README.md", data);
    });
}


// console.log(questions);

// Function call to initialize app
init();


