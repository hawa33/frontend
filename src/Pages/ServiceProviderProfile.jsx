import React from 'react';
import './ServiceProvider.css';

function ServiceProvider() {
  return (
    <div className="service-provider">
      <div className="top-bar">
        <div className="logo"></div>
        <h1 className="header-title">Service Provider</h1>
        <nav className="navigation">
          <a href="#" className="nav-item">Home</a>
          <a href="#" className="nav-item">About</a>
          <a href="#" className="nav-item">Services</a>
          <a href="#" className="nav-item">Contact</a>
        </nav>
      </div>

      <div className="hero-section">
        <div className="profile-avatar"></div>
        <div className="profile-info">
          <h2 className="profile-name">John Doe</h2>
          <div className="profile-details">
            <span className="detail-tag">Professional</span>
            <span className="detail-tag">5+ Years Experience</span>
          </div>
          <p className="profile-description">
            Dedicated service provider specializing in top-notch client experience with an emphasis on quality.
          </p>

          <div className="action-buttons">
            <div className="primary-button">Contact Me</div>
            <div className="secondary-button">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProvider;
