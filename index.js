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

function init() {}

init();
