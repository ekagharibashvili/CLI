const musette = require("commander");
// const chalk = require("chalk");
const figlet = require("figlet");
const clear = require("clear");

const files = require("./lib/files");
const github = require("./lib/github_credentials");

musette
  .command("init")

  .description("Draw app banner")

  .action(() => {
    clear();
    console.log(figlet.textSync("Node.js", { horizontalLayout: "full" }));
  });

musette
  .command("octocheck")
  .description("Check user gitHub credentials")
  .action(async () => {
    let token = github.getStoredGithubToken();
    if (!token) {
      await github.setGitHubCredentials();
      token = await github.registerNewToken();
    }
    console.log(token);
  });

musette.parse(process.argv);

if (!musette.args.length) {
  musette.help();
}
