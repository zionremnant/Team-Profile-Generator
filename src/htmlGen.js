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
