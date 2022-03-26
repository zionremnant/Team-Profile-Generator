const generateManagerCard = (manager) => {
  return `
  <div class="card m-1 bg-primary" style="width: 18rem">
  <h3>${manager.getName()}</h3>
  <p>${manager.getRole()}</p>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.getID()}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
      </li>
      <li class="list-group-item">Office: ${manager.getOfficeNumber()}</li>
    </ul>
  </div>
</div>
`;
};
const generateEngineerCard = (engineer) => {
  return `
    <div class="card m-1 bg-success" style="width: 18rem">
    <h3>${engineer.getName()}</h3>
    <p>${engineer.getRole()}</p>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getID()}</li>
        <li class="list-group-item">
          Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
        </li>
        <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
  `;
};
const generateInternCard = (intern) => {
  return `
  <div class="card m-1 bg-info" style="width: 18rem">
      <h3>${intern.getName()}</h3>
      <p>${intern.getRole()}</p>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getID()}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
          </li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
    `;
};
const baseHTML = (htmlArr) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <style>body{font-size:80%}</style>
    <title>Team Profile</title>
  </head>
  <body>
  <div class="jumbotron jumbotron-fluid bg-warning">
  <div class="container">
    <h1 class="display-4 text-center">Team Members</h1>
  </div>
  </div>
  <div class="d-flex flex-row flex-wrap justify-content-center">
${htmlArr.join(" ")}
  </div>
  </body>
</html>
`;
module.exports = {
  generateEngineerCard,
  generateInternCard,
  generateManagerCard,
  baseHTML,
};
