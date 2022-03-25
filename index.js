const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];
const emailValidate = require("email-validate");

const Employee = {
  Engineer: "Engineer",
  Intern: "Intern",
  Manager: "Manager",
};

function init() {
  function managerCreate() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the manager's name?",
          validate: (response) => {
            return validation.required(response);
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the manager's employee Id?",
          validate: (response) => {
            return validation.required(response);
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the manager's email address?",
          validate: (response) => {
            return validation.required(response) && validation.email(response);
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager's office number?",
          validate: (response) => {
            return validation.required(response);
          },
        },
      ])
      .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(generateManagerCard(manager));
        mainMenu();
      });
  }
  function mainMenu() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "addedRole",
          message: "Would you like to add another employee??",
          choices: ["Engineer", "Intern", "No, I'm Done"],
        },
      ])
      .then((answers) => {
        switch (answers.addedRole) {
          case "Engineer":
            return engineerCreate();
          case "Intern":
            return internCreate();
          default:
            return generateHTML();
        }
      });
  }
  function engineerCreate() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the engineer's name?",
          validate: (response) => {
            return validation.required(response);
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's employee Id?",
          validate: (response) => {
            return validation.required(response);
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email address?",
          validate: (response) => {
            return validation.required(response) && validation.email(response);
          },
        },
        {
          type: "input",
          name: "username",
          message: "What is the engineer's Github username?",
          validate: (response) => {
            return validation.required(response);
          },
        },
      ])
      .then(({ name, id, email, username }) => {
        const engineer = new Engineer(name, id, email, username);
        employees.push(generateEngineerCard(engineer));
        mainMenu();
      });
  }
  function internCreate() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the intern's name?",
          validate: (response) => {
            return validation.required(response);
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the intern's employee Id?",
          validate: (response) => {
            return validation.required(response);
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the intern's email address?",
          validate: (response) => {
            return validation.required(response) && validation.email(response);
          },
        },
        {
          type: "input",
          name: "username",
          message: "What is the intern's school?",
          validate: (response) => {
            return validation.required(response);
          },
        },
      ])
      .then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school);
        employees.push(generateInternCard(intern));
        mainMenu();
      });
  }
  function generateHTML() {
    fs.writeFile("index.html", baseHTML(employees), (err) => {
      err ? console.log(err) : console.log("Generated HTML File");
    });
  }
  managerCreate();
}

init();
