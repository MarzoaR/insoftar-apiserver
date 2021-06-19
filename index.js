const { json } = require('express');
const express = require('express');
const conectDB = require('./config/db');
const cors = require('cors');

// Server create
const app = express();

// Connect to the Database
conectDB();
app.use(cors());

app.use(express.json());

app.use('/api/users', require('./routes/user'));

app.listen( process.env.PORT || 5000, () => {
  console.log('server ok');
});