const express = require('express');
const details = require('./details')

const app = express();

app.use(express.static('public'));

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const robo = details.find(id);
    res.send(
        robo
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
            <div class='container'>
                <ul class='robot-list'>
                    ${robos.map(robo => `
                    <li><a href="http://localhost:1337/details/${robo.id}">${robo.name}</a></li>`)}
                </ul>
            </div>
         </body>
        </html>`
    )
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`)
});