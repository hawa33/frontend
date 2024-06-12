import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <section className="container">
      <div className="content-wrapper">
        <h1 className="title">Welcome to Karmadhara!</h1>
        <p className="subtitle">Find and offer services in one place.</p>
        <div className="button-wrapper">
          <Link to="/browse" className="browse-button" tabIndex="0">Browse</Link>
          <div className="login-register-wrapper">
            <Link to="/register" className="register-button" tabIndex="0">Register</Link>
            <Link to="/login" className="login-button" tabIndex="0">Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
