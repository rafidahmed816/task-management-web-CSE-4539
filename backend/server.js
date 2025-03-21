// server.js
const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();


connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define routes
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/tasks', require('./routes/taskRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
