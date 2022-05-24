const inquirer = require("inquirer");
const minimist = require("minimist");
const files = require("./files");

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: "username",
        type: "input",
        message: "Enter your Github username or e-mail address",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please ${message}";
          }
        },
      },
      {
        name: "password",
        type: "password",
        message: "Enter your password",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please ${message}";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
