import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../../style/LoginForm.css'; 
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Basic validation
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    // Perform login logic (e.g., API call)
    console.log("Login Successful", formData);

    // Clear error and reset form
    setError("");
    setFormData({ email: "", password: "" });

    // Navigate to the home page
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login Form</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
