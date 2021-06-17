const mongoose = require('mongoose');

require('dotenv').config( {
  path: 'variables.env'
} );

const conectDB = async () => {

  try {

    await mongoose.connect( process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    } )

    console.log('Connected DB');

  } catch (error) {

    console.log(error);
    process.exit(1);
    // Se detiene la aplicación

  }

}

module.exports = conectDB;