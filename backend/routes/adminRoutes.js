// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const userAuth = require('../middleware/userAuth');
const adminAuth = require('../middleware/adminAuth');
const { getAllUsersWithTasks } = require('../controllers/adminController');

// Route for admin to get all users along with their tasks
router.get('/users', userAuth, adminAuth, getAllUsersWithTasks);

module.exports = router;
