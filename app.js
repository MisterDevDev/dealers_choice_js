const express = require('express');
const morgan = require('morgan')
const client = require('./db')

const app = express();
const PORT = 1337;

app.use(morgan('dev'))
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const baseQuery = `
    SELECT *
    FROM detail as d\n
`

app.get('/details/:id', async (req, res, next) => {
    try {
    const id = req.params.id;//{ id } = req.params
    const datas = await client.query(`
        ${baseQuery}
          WHERE d.id = $1;
    `, [id])
    const robo = datas.rows[0];
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
                    <h3><a href="/">Home Page</a></h3>
                </div>
            </body>`
    )
    } catch (err) {
        next(err)
    }
})


app.get('/', async (req, res, next) => {
    try{
    const datas = await client.query(`${baseQuery}`)
    const robos = datas.rows;
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
                        <li><a href="/details/${robo.id}">${robo.name}</a></li>`
                        ).join('')}
                    </ul>
                </div>
            </body>
        </html>`
    )
    } catch (err) {
        next(err)
    }
});



app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`)
});

//console.log(JSON.stringify(data, null, 4));