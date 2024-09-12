import React from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure this import is correct
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBrowse = () => {
    console.log("Navigating to /browse"); // Add a console log to see if the function is being called
    navigate('/browse');
  };

  const handleRegister = () => {
    console.log("Navigating to /register");
    navigate('/register');
  };

  const handleLogin = () => {
    console.log("Navigating to /login");
    navigate('/login');
  };

  return (
    <section className="container">
      <div className="content-wrapper">
        <h1 className="title">Welcome to Karmadhara!</h1>
        <p className="subtitle">Find and offer services in one place.</p>
        <div className="button-wrapper">
          <button className="browse-button" tabIndex="0" onClick={handleBrowse}>
            Browse
          </button>
          <div className="login-register-wrapper">
            <button className="register-button" tabIndex="0" onClick={handleRegister}>
              Register
            </button>
            <button className="login-button" tabIndex="0" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
