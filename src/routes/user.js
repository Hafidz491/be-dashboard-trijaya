const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

// Register
router.post('/register', userController.register);

// Login
router.post('/login', userController.login);

// Get Detail User
router.get('/detail/:id', userController.detail);

// Get All User
router.get('/all', userController.all);

// Delete User
router.delete('/delete/:id', userController.deleteById);

// Update User
router.put('/update/:id', userController.update);

module.exports = router;
