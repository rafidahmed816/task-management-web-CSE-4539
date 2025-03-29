// src/components/TaskForm.js
import React, { useState } from "react";
import { createTask } from "../api";

const VALID_CATEGORIES = [
  "Work",
  "Personal",
  "Study",
  "Health & Fitness",
  "Shopping",
  "Finance",
  "Home",
  "Errands",
  "Travel",
  "Hobbies",
  "Important",
  "Urgent",
  "Miscellaneous",
];

const TaskForm = ({ refreshTasks }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
    category: "Work", // Default category
  });
  
  const token = localStorage.getItem("token");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(form, token);
    refreshTasks(); // Refresh tasks after creation
    setForm({
      title: "",
      description: "",
      dueDate: "",
      priority: "Medium",
      category: "Work",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>
      
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
      />

      <label htmlFor="priority">Priority</label>
      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <label htmlFor="category">Category</label>
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        {VALID_CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
