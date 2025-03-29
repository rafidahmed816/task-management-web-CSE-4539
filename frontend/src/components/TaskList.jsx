// src/components/TaskList.js
import React, { useEffect, useState } from "react";
import { getTasks, updateTask, deleteTask } from "../api";

const VALID_CATEGORIES = [
  "Work", "Personal", "Study", "Health & Fitness", "Shopping", "Finance",
  "Home", "Errands", "Travel", "Hobbies", "Important", "Urgent", "Miscellaneous",
];

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ priority: "", sortBy: "", search: "", category: "" });
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchTasks() {
      if (token) {
        const data = await getTasks();
        setTasks(data);
      }
    }
    fetchTasks();
  }, [token]);

  // Enhanced Sorting Logic with Priority, Due Date, and Category
  const filteredTasks = tasks
    .filter((task) =>
      (filters.priority ? task.priority === filters.priority : true) &&
      (filters.category ? task.category === filters.category : true) &&
      (filters.search
        ? task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          task.description.toLowerCase().includes(filters.search.toLowerCase())
        : true)
    )
    .sort((a, b) => {
      if (filters.sortBy === "dueDate") {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      if (filters.sortBy === "priority") {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return 0;
    });

  const handleEdit = (task) => {
    setEditingTask(task._id);
    setUpdatedTask({ ...task });
  };

  const handleUpdateChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const saveTask = async () => {
    await updateTask(editingTask, updatedTask);
    setTasks(tasks.map((task) => (task._id === editingTask ? updatedTask : task)));
    setEditingTask(null);
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    setTasks(tasks.filter((task) => task._id !== taskId));
  };

  return (
    <div className="task-container">
      <h2>My Tasks</h2>

      {/* Search and Filter Options */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search tasks..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />

        <select onChange={(e) => setFilters({ ...filters, priority: e.target.value })}>
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        {/* New Category Sorting Dropdown */}
        <select onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
          <option value="">All Categories</option>
          {VALID_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}>
          <option value="">Sort By</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      {/* Task Table */}
      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Category</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length ? (
            filteredTasks.map((task) => (
              <tr key={task._id}>
                {editingTask === task._id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="title"
                        value={updatedTask.title}
                        onChange={handleUpdateChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="description"
                        value={updatedTask.description}
                        onChange={handleUpdateChange}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="dueDate"
                        value={updatedTask.dueDate}
                        onChange={handleUpdateChange}
                      />
                    </td>
                    
                    <td>
                      <select
                        name="category"
                        value={updatedTask.category}
                        onChange={handleUpdateChange}
                      >
                        {VALID_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td>
                      <input
                        type="text"
                        name="status"
                        value={updatedTask.status}
                        onChange={handleUpdateChange}
                      />
                    </td>

                    <td>
                      <select
                        name="priority"
                        value={updatedTask.priority}
                        onChange={handleUpdateChange}
                      >
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </td>

                    <td>
                      <button onClick={saveTask}>Save</button>
                      <button onClick={() => setEditingTask(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                    <td>{task.category}</td>
                    <td>{task.status}</td>
                    <td className={`priority ${task.priority.toLowerCase()}`}>
                      {task.priority}
                    </td>
                    <td>
                      <button onClick={() => handleEdit(task)}>Edit</button>
                      <button onClick={() => handleDelete(task._id)} className="delete-btn">
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No tasks found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
