import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css"; // optional styling

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Welcome to the Form App</h1>
      <p>Please login or sign up to continue</p>
      <div className="landing-buttons">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    </div>
  );
};

export default Landing;
