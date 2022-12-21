
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./utils/generateMarkdown.js")
const prompt = inquirer.createPromptModule();

prompt([
    {
        type: "input",
        name: "title",
        message: "What would you like to name your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project about?"
    },
    {
        type: "input",
        name: "installation",
        message: "What packages need to be installed to run your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How can your project be used?"
    },
    {
        type: "input",
        name: "contributions",
        message: "Who all contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "How do you test the project?"
    },
    {
        type: "list",
        name: "license",
        message: "Pick a license for your project.",
        choices: ["MIT", "Apache 2.0", "ISC", "none"]
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your GitHub handle?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },

])
    .then(generateReadme)
    .then(writeToFile)

function writeToFile(fileName, data) {
    try {
        fs.writeFileSync("Test-README.md", fileName);
        console.log("success")
    } catch (err) {
        console.log(err);
    }
}


