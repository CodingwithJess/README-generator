const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
  return inquirer.prompt ([
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your site?"
    },
    {
      type: "input",
      name: "install",
      message: "What are the steps required to install your site?"
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use:"
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like to use?",
      choices: ["MIT" , "ISC", "Apache 2.0","GNU General Public v3.0"]
    },
    {
      type: "input",
      name: "contributing",
      message: "If you would like other developers to contribute, what guidelines would you like them to follow?"
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide examples of how to run tests of your site:"
    },
    {
      type: "input",
      name: "Questions",
      message: "What is your Github username?"
    },
  ])
}

function generateReadMe(answers){
  return `

  `
}

promptUser()
  .then(function(answers){
    const readMe = generateReadMe(answers);
    return writeFileAsync("README.md", readMe);
  })
  .then(function(){
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err){
    console.log(err)
  });