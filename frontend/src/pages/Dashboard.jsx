// src/pages/Dashboard.js
import React, { useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshTasks = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="dashboard">
      <TaskForm refreshTasks={refreshTasks} />
      <TaskList key={refresh} />
    </div>
  );
};

export default Dashboard;
