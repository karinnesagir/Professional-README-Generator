// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.renderLicenseBadge}
  # Description
  ${data.description}
  # Table of Contents 
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [License](#-Installation)
  * [Contributing](#-Contributing)
  * [Tests](#-Tests)
  * [Questions](#-Contact-Information)
      
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License 
  ${data.license}
  * This project is licensed under the ${data.license} license. For more information on the ${data.license} license, please use the following link: ${data.renderLicenseLink}.
  # Contributing 
  ${data.contributing}
  # Tests
  ${data.tests}
  # Contact Information 
  If you have any further questions, please contact me using the contact email below!
  * GitHub Username: ${data.username}
  * Contact Email: ${data.email}
  `;
}

//Export the generateMarkdown function 
module.exports = generateMarkdown;