import React from 'react';
import './style.css';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Logged in (mock)");
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2 className="text-center mb-4">Login</h2>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Username"
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            required
          />
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
