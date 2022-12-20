

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

function generateMarkdown(data) {
  return `
  # ${data.title}
  [![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})

  ## Description
    ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  Packages required to run this program are: ${data.installation}
  
  ## Usage
  Examples of how to use this program: ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributions}

  ## Tests
  To test, run the following command: ${data.tests}

  ## Questions
  If you have any questions, contact ${data.email}

  You can find my GitHub repo at: https://www.github.com/${data.gitHub}
  
`;
}

module.exports = generateMarkdown;
