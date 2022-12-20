// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const prompt = inquirer.createPromptModule();

// TODO: Create an array of questions for user input
const questions = [
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
        choices: ["mit", "wtfpl", "cc", "none"]
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

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
