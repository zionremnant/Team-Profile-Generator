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
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
        validate: (response) => {
          return validation.required(response);
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee Id?",
        validate: (response) => {
          return validation.required(response);
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?",
        validate: (response) => {
          return validation.required(response) && validation.email(response);
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?",
        validate: (response) => {
          return validation.required(response);
        },
      },
    ]);
    // .then[({name, id, email, officeNumber]} => {
    //   const manager = new Manager(name, id, email, officeNumber)
    // })
  }
}

init();
