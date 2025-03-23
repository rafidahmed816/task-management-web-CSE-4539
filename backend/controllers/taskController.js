// controllers/taskController.js
const Task = require('../models/Task');

// Create a new task
const createTask = async (req, res) => {
  const { title, description, dueDate, priority, category } = req.body;
  try {
    const newTask = new Task({
      title,
      description,
      dueDate,
      priority,
      category,
      user: req.user.id,
    });

    const task = await newTask.save();
    res.status(201).json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get tasks for the authenticated user with optional filters
const getTasks = async (req, res) => {
  try {
    const filter = { user: req.user.id };

    if (req.query.priority) filter.priority = req.query.priority;
    if (req.query.category) filter.category = req.query.category;
    if (req.query.completed) filter.completed = req.query.completed === 'true';

    
    let sort = {};
    if (req.query.sortBy) {
      const parts = req.query.sortBy.split(':');
      sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
    } else {
      sort = { dueDate: 1 }; // Default sorting
    }

    const tasks = await Task.find(filter).sort(sort);
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get a single task by ID
const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update an existing task
const updateTask = async (req, res) => {
  const { title, description, dueDate, priority, category, completed } = req.body;
  const taskFields = { title, description, dueDate, priority, category, completed };

  // Remove undefined fields
  for (let key in taskFields) {
    if (taskFields[key] === undefined) delete taskFields[key];
  }

  try {
    let task = await Task.findOne({ _id: req.params.id, user: req.user.id });
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    task = await Task.findByIdAndUpdate(req.params.id, { $set: taskFields }, { new: true });
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    console.log('User ID:', req.user.id); // Debugging
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Task removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
module.exports = { createTask, getTasks, getTask, updateTask, deleteTask };
