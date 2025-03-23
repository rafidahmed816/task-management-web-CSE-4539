// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const userAuth = require('../middleware/userAuth');
const { createTask, getTasks, getTask, updateTask, deleteTask } = require('../controllers/taskController');

// Create a task
router.post('/', userAuth, createTask);

// Get tasks with optional filters
router.get('/', userAuth, getTasks);

// Get a single task by ID
router.get('/:id', userAuth, getTask);

// Update a task by ID
router.put('/:id', userAuth, updateTask);

// Delete a task by ID
router.delete('/:id', userAuth, deleteTask);

module.exports = router;
