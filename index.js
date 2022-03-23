const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const emailValidate = require("email-validate");
let employees = [];
const Employee = {
  Engineer: "Engineer",
  Intern: "Intern",
  Manager: "Manager",
};
