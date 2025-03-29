// src/components/AdminPanel.js
import React, { useEffect, useState } from "react";
import { getAdminTasks } from "../api";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getAdminTasks(token);
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }
    fetchUsers();
  }, [token]);

  return (
    <div className="admin-panel">
      <h2>Admin Panel: User Tasks View</h2>
      {users.length ? (
        users.map((user) => (
          <div key={user._id} className="user-tasks">
            <h3>{user.name} ({user.email})</h3>
            
            {user.tasks.length ? (
              <table className="task-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Due Date</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {user.tasks.map((task) => (
                    <tr key={task._id}>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                      <td>{task.category}</td>
                      <td>{task.status}</td>
                      <td className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</td>
                      <td>{task.completed ? "Yes" : "No"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No tasks found for this user.</p>
            )}
          </div>
        ))
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default AdminPanel;
