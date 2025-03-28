// src/components/TaskForm.js
import React, { useState } from "react";
import { createTask } from "../api";

const TaskForm = ({ refreshTasks }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
    category: "",
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
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>
      <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
