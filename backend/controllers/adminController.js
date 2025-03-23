// controllers/adminController.js
const User = require('../models/User');
const Task = require('../models/Task');

const getAllUsersWithTasks = async (req, res) => {
  try {
    // Retrieve all users (excluding password)
    const users = await User.find().select('-password');
    
    // const usersWithTasks = await Promise.all(
    //   users.map(async (user) => {
    //     //const tasks = await Task.find({ user: user._id });
    //     return { ...user.toObject() };
    //   })
    // );

    const usersWithTasks = await Promise.all(
      users.map(async (user) => {
        const tasks = await Task.find({ user: user._id });
        return { ...user.toObject(), tasks };
      })
    );
    
    res.json(usersWithTasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
module.exports = { getAllUsersWithTasks };