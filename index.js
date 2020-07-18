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
      name: "deployedSite",
      message: "What is the link to your deployed site?"
    },
    {
      type: "input",
      name: "description",
      message: "What is a quick description of your site?"
    },
    {
      type: "input",
      name: "instructions",
      message: "What instructions does the user need to use this site?"
    },
    {
      type: "input",
      name: "languages",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "image",
      message: "What is the filepath for an image of your deployed site?"
    },
  ])
}

