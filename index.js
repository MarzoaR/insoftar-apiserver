const express = require('express');
const conectDB = require('./config/db');

// Server create
const app = express();

// Connect to the Database
conectDB();

// Main path
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen( 4000, () => {
  console.log('todo ok');
});