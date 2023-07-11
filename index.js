// TODO: Include packages needed for this application
const { writeFile } = require('fs').promises
const inquirer = require('inquirer')
const markDown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

// questions: what is the title of your project?, Please provide a description on what,why and of how your project came to be
// what steps need to be taking to install the project, please provide instuctions and examples on usage, any credits need to be given? 
const questions = [ {
    type: 'input',
    name: 'title',
    message:'what is the title of your project?'
},{
    type:'input',
    name:'description',
    message:'Please provide a description on what,why and of how your project came to be'
},{
    type:'input',
    name: 'installation',
    message:'what are the steps needed to install your application?'

},{
    type:'input',
    name: 'licenses',
    message: 'any licenses used?'
},{
    type:'input',
    name:'credits',
    message: 'Please list any contributors or collaborators',
},{
    type:'input',
    name: 'tests',
    message:''
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName,data)
    .then(data => {
        console.log('Saved')
    })
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(data => {
        const text = markDown(data)
        writeToFile('README.md',text)
    })
}

// Function call to initialize app
init();
