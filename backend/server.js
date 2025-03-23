// server.js
const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();

// database connection
connectDB();

app.use(express.json());

// Define routes
app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/admin', require('./routes/adminRoutes')); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
