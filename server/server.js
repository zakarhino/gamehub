const path = require('path');
const express = require('express');
//const psql_db = require('./psqldb.js');
const db_test = require('../client/database_test.js');
const app = express();

app.use(express.static(path.join(__dirname, '../dist/')));

// This needs to be after all other routes on your server
app.use(function(req, res) {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
})

app.listen(process.env.PORT || 3000);

console.log("Listening on port 3000");
