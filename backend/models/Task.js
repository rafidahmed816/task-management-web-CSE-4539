// models/Task.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    category: {
      type: String,
      enum: [
        'Work',
        'Personal',
        'Study',
        'Health & Fitness',
        'Shopping',
        'Finance',
        'Home',
        'Errands',
        'Travel',
        'Hobbies',
        'Important',
        'Urgent',
        'Miscellaneous',
      ],
      default: 'Miscellaneous',
    },
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', TaskSchema);
