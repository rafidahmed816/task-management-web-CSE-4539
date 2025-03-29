// src/components/Login.js
import React, { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    
    // Clear field error when user types
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
    
    // Clear form error when user makes any change
    if (formError) {
      setFormError("");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    // Validate password is not empty
    if (!form.password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const data = await login(form);
      
      if (data.token) {
        localStorage.setItem("token", data.token);
        setUser(data);
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        setFormError("Login failed! No token received.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setFormError(
        error.response?.data?.msg || 
        "Login failed! Check your credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        {formError && <div className="error-message">{formError}</div>}
        
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={handleChange} 
            className={errors.email ? "input-error" : ""}
            required 
          />
          {errors.email && <div className="field-error">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            onChange={handleChange} 
            className={errors.password ? "input-error" : ""}
            required 
          />
          {errors.password && <div className="field-error">{errors.password}</div>}
        </div>
        
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;