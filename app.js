const express = require('express');
const details = require('./details')

const app = express();
const PORT = 1337;

app.use(express.static('public'));

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const robo = details.find(id);
    res.send(
        `<!DOCTYPE html>
        <html>
            <head>
                <link rel='stylesheet' href='/style.css' />
            </head>
            <body>
                <table class='detail-sheet'>
                    <tr>
                        <th>${robo.name}'s Detail Sheet</th>
                    </tr>
                    <tr>
                        <td>ID #</td>
                        <td>${robo.id}</td>
                    </tr>
                    <tr>
                        <td>Fullname</td>
                        <td>${robo.fullname}</td>
                    </tr>                    
                    <tr>
                        <td>Directive</td>
                        <td>${robo.directive}</td>
                    </tr>                    
                    <tr>
                        <td>Main Weapon</td>
                        <td>${robo.weapon}</td>
                    </tr>
                    <tr>
                        <td>Movie</td>
                        <td>${robo.movie}</td>
                    </tr>
                    <tr>
                        <td>Voice Actor</td>
                        <td>${robo.actor}
                    </tr>
                </table>
                <div class = 'return-button'>
                    <h3><a href="http://localhost:${PORT}">Home Page</a></h3>
                </div>
            </body>`
    )
})


app.get('/', (req, res) => {
    const robos = details.list();

    res.send(
        `<!DOCTYPE html>
        <html>
            <head>
                <link rel='stylesheet' href='/style.css' />
            </head>
            <body>
                <h1>Disney Robots</h1>
                <div class='container'>
                    <ul class='robot-list'>
                        ${robos.map(robo => `
                        <li><a href="http://localhost:${PORT}/details/${robo.id}">${robo.name}</a></li>`)}
                    </ul>
                </div>
            </body>
        </html>`
    )
});


app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`)
});