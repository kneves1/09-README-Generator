module.exports = {

    generateReadMe: (answers) => {
      return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
      </head>
      <body>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
          <ul class="list-group">
            <li class="list-group-item">My GitHub username is ${answers.github}</li>
          </ul>
        </div>
      </div>
      </body>
      </html>`;
      }
  }