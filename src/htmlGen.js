const generateManagerCard = (manager) => {
  return `
  <div class="card">
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
    <div class="card">
    <h3>${engineer.getName()}</h3>
    <p>${engineer.getRole()}</p>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getID()}</li>
        <li class="list-group-item">
          Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
        </li>
        <li class="list-group-item">Office: ${engineer.getUsername()}</li>
      </ul>
    </div>
  </div>
  `;
};
const generateInternCard = (intern) => {
  return `
      <div class="card">
      <h3>${intern.getName()}</h3>
      <p>${intern.getRole()}</p>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getID()}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
          </li>
          <li class="list-group-item">Office: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
    `;
};
const baseHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
  <header>
  <div class="jumbotron jumbotron-fluid">
  <h1 class="display-4 heading">Team Members</h1>
  </div>
  </header>
  <div id="container">
  <div class="card-deck">
  </div>
  </div>
  </body>
</html>`;
