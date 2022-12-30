const inquirer = require('inquirer');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (value === "Apache 2.0"){
    
  } else if (value === "GNU General Public v3.0"){
  } else if (value === "MIT"){
  } else if (value === "BSD 2-Clause 'Simplified'"){
  } else if (value === "BSD 3-Clause 'New' or 'Revised'"){
  } else if (value === "Boost Software 1.0"){
  } else if (value === "Creative Commons Zero v1.0 Universal"){
  } else if (value === "Eclipse Public 2.0"){
  } else if (value === "GNU Affero General Public v3.0"){
  } else if (value === "GNU General Public v2.0"){
  } else if (value === "GNU Lesser General Public v2.1"){
  } else if (value === "Mozilla Public 2.0") {

  } else {
    return "";
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (value === "GNU AGPLv3") {
    return "[![License"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # Title
  ${data.title}
  ${data.licenseURL}

  # Description
  ${data.description}

  # Table of Contents
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [License](#-License)
  * [Contribution] 
  * (#-Tests)
  * [Questions](#-Contact-Infor)


  # Installation
  ${data.installation}

  # Usage Information
  ${data.usage}

  # License
  ${data.license}

  # Contribution
  ${data.contribution}

  # Tests
  ${data.test}

  # Questions 
  # GitHub Username: ${data.username}
  # Contact Email: ${data.email}
`;
}

module.exports = generateMarkdown;
