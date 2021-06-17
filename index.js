const express = require('express');

// Server create
const app = express();

// Main path
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen( 4000, () => {
  console.log('todo ok');
});