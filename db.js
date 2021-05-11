//setup the node-postgres driver
const pg = require('pg');
const databaseURL = 'postgres://localhost/detail_directory' // path to database
const client = new pg.Client(databaseURL) // new client object

// connect to the postgres server
client.connect();


module.exports = client;