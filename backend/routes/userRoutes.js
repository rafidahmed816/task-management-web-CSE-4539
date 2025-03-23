// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { register, verifyEmail, login } = require('../controllers/userController');

// Register new user
router.post('/register', register);

// verify email
// router.post('/verify-email', verifyEmail);

// User login
router.post('/login', login);

module.exports = router;
