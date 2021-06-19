const User = require('../models/User');

exports.addUser = async (req, res) => {

  try {
    // Create user
    let user;

    user = new User(req.body);
    await user.save();

    res.send(user);

  } catch (error) {
    console.log(error);
    res.status(500).send('An error has occurred');
  }

}

exports.getUsers = async (req, res) => {

  try {
    
    const user = await User.find();
    res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).send('An error has occurred');
  }

}

exports.updateUser = async (req, res) => {

  try {
    
    const { name, lastname, dni, phone, email } = req.body;

    let user = await User.findById( req.params.id );

    if(!user) {
      res.sendStatus(404).json( {
        msg: 'no user exists'
      });
    }

    user.name = name;
    user.lastname = lastname;
    user.dni = dni;
    user.phone = phone;
    user.email = email;

    user = await User.findOneAndUpdate( { _id: req.params.id }, user, { new: true });
    res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).send('An error has occurred');
  }

}

exports.getUser = async (req, res) => {

  try {

    let user = await User.findById( req.params.id );

    if(!user) {
      res.sendStatus(404).json( {
        msg: 'no user exists'
      });
    }

    res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).send('An error has occurred');
  }

}

exports.deleteUser = async (req, res) => {

  try {

    let user = await User.findById( req.params.id );

    if(!user) {
      res.sendStatus(404).json( {
        msg: 'no user exists'
      });
    }

    await User.findOneAndRemove( { _id: req.params.id });
    res.json({
      msg: 'User deleted'
    });

  } catch (error) {
    console.log(error);
    res.status(500).send('An error has occurred');
  }

}

exports.checkEmail = async (req, res) => {

  try {

    let email = await User.find( { email: req.params.email } );
    // res.json(email);
    if( email.length == 0 ) {
      res.send(true)
    }else{
      res.send(false)
    }

  } catch (error) {
    console.log(error);
    res.status(500).send('An error has occurred');
  }

}

exports.checkDni = async (req, res) => {

  try {

    let dni = await User.find( { dni: req.params.dni } );

    if( dni.length == 0 ) {
      res.send(true)
    }else{
      res.send(false)
    }

    // res.json(dni);

  } catch (error) {
    console.log(error);
    res.status(500).send('An error has occurred');
  }

}