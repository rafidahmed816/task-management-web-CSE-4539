// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, logout }) => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        {user && <Link to="/dashboard">Dashboard</Link>}
        {user && user.role === "admin" && <Link to="/admin">Admin Panel</Link>}
      </div>
      <div>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
