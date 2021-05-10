const details = require('./details')

const htmlSingleRoute =
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
            <h3><a href="/">Home Page</a></h3>
        </div>
    </body>`

const htmlMain = 
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
                <li><a href="http://localhost:${PORT}/details/${robo.id}">${robo.name}</a></li>`
                ).join('')}
            </ul>
        </div>
    </body>
</html>`

module.exports = [htmlSingleRoute, htmlMain]