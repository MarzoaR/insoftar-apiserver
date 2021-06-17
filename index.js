const { json } = require('express');
const express = require('express');
const conectDB = require('./config/db');

// Server create
const app = express();

// Connect to the Database
conectDB();

app.use(express.json());

app.use('/api/users', require('./routes/user'));

app.listen( 4000, () => {
  console.log('todo ok');
});