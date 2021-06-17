// User routes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// api/users

router.post('/', userController.addUser);

module.exports = router;