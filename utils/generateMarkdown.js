// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU General Public v3.0"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "BSD 2-Clause 'Simplified'"){
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "BSD 3-Clause 'New' or 'Revised'"){
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    if (license == "None"){
        return "";
    } else if (license != ""){
        return [
            'This project is licensed under the ' + license + ' license. For more information on the ' + license + 
            ' license, please use the following link: ' + renderLicenseLink(license) + '.'
        ]
    } else {
        return "";
    }
};

    



// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `
    
    # Title
    ${answers.title}
    ${renderLicenseBadge(answers.license)}
    
    # Description
    ${answers.description}

    # Table of Contents 
    * [Installation](#-Installation)
    * [Usage](#-Usage)
    * [License](#-License)
    * [Contributing](#-Contributing)
    * [Tests](#-Tests)
    * [Questions](#-Contact-Information)
  
    # Installation
    ${answers.installation}
  
    # Usage Information
    ${answers.usage}
  
    # License 
    ${renderLicenseSection(answers.license)}
    
    # Contribution
    ${answers.contribution}
  
    # Tests
    ${answers.test}
  
    # Questions 
    If you have any further questions, please contact me using the contact email below.
    # GitHub Username: ${answers.username}
    # Contact Email: ${answers.email}
  `;
  }

module.exports = generateMarkdown;