const express = require('express');
const router = express.Router();
// UserController would be a separate file where you define the logic for each route
const UserController = require('../controllers/userController');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

module.exports = router;
