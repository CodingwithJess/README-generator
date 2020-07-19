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
      choices: ["MIT" , "ISC", "Apache 2.0"]
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
      name: "username",
      message: "What is your Github username?"
    },
    {
      type: "input",
      name: "repo",
      message: "What is the Github repository name for this site?"
    },
  ])
}

// function licenseType (answers){
//   let result;
//   if (answers.license === "MIT"){

//   }
//   if (answers.license === "ISC"){

//   }
//   if (answers.license === "Apache 2.0"){

//   }
//   else (console.log("Please select a license type."))

//   return result;
// }


function generateReadMe(answers){
  return `
  ![GitHub](https://img.shields.io/github/license/${answers.username}/${answers.repo}?style=plastic)

  # ${answers.title}

  ## Description 
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions) 
  
  ## Installation
  ${answers.install}

  ## Usage 
  ${answers.usage}
  ## License
  This site is covered under ${answers.license}
  
  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}
  
  ## Questions?
  https://github.com/${answers.username}

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