const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

// Register
router.post('/register', userController.register);

// Login
router.post('/login', userController.login);

// Get All User

module.exports = router;
