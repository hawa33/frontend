import React from 'react';
import './ServiceProviderDashboard.css';

function ServiceProviderDashboard() {
  // Handler functions
  const handleProfileClick = () => {
    console.log('Profile clicked');
    // Implement your logic for profile action
  };

  const handleManageListingsClick = () => {
    console.log('Manage Listings clicked');
    // Implement your logic for managing listings
  };

  const handleViewBookingsClick = () => {
    console.log('View Bookings clicked');
    // Implement your logic for viewing bookings
  };

  const handleRespondIssuesClick = () => {
    console.log('Respond to Issues clicked');
    // Implement your logic for responding to issues
  };

  const handleLogoutClick = () => {
    console.log('Logout clicked');
    // Implement your logic for logout action
  };

  return (
    <section className="service-provider-dashboard">
      <header className="top-bar">
        <div className="profile-icon" aria-hidden="true"></div>
        <h1 className="dashboard-title">Service Provider Dashboard</h1>
        <button onClick={handleProfileClick} className="nav-item">Profile</button>
        <button onClick={handleManageListingsClick} className="nav-item">Manage Listings</button>
        <button onClick={handleViewBookingsClick} className="nav-item">View Bookings</button>
        <button onClick={handleRespondIssuesClick} className="nav-item">Respond to Issues</button>
        <button onClick={handleLogoutClick} className="nav-item">Logout</button>
      </header>

      <main>
        {/* Manage Listings Section */}
        <section className="section">
          <div className="section-container">
            <h2 className="section-title">Manage Listings</h2>
            <p className="section-description">View and manage your current listings</p>
            <div className="add-listing-btn">
              <button className="primary-btn">Add New Listing</button>
            </div>
          </div>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cd7271f9454ae7190680fc214c295d67b626e58117a242802df2a71b681eded?placeholderIfAbsent=true&apiKey=67fda85d73b3434bbb9deb1c2ad56b77" 
            alt="" 
            className="section-bg" 
          />
        </section>

        {/* Listings Section */}
        <section className="list-section">
          <h2 className="list-title">Your Listings</h2>
          <div className="list-container">
            <div className="list-row">
              <article className="list-item">
                <span className="item-icon" aria-hidden="true">🏠</span>
                <div className="item-details">
                  <h3 className="item-title">Listing Name 1</h3>
                  <p className="item-subtitle">Location: City, Country</p>
                </div>
                <p className="item-price">Price: $100</p>
              </article>
              <article className="list-item">
                <span className="item-icon" aria-hidden="true">🏠</span>
                <div className="item-details">
                  <h3 className="item-title">Listing Name 2</h3>
                  <p className="item-subtitle">Location: City, Country</p>
                </div>
                <p className="item-price">Price: $120</p>
              </article>
            </div>
          </div>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cd7271f9454ae7190680fc214c295d67b626e58117a242802df2a71b681eded?placeholderIfAbsent=true&apiKey=67fda85d73b3434bbb9deb1c2ad56b77" 
            alt="" 
            className="section-bg" 
          />
        </section>

        {/* Bookings Section */}
        <section className="section">
          <div className="section-container">
            <h2 className="section-title">View Bookings</h2>
            <p className="section-description">Manage your bookings and appointments</p>
          </div>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cd7271f9454ae7190680fc214c295d67b626e58117a242802df2a71b681eded?placeholderIfAbsent=true&apiKey=67fda85d73b3434bbb9deb1c2ad56b77" 
            alt="" 
            className="section-bg" 
          />
        </section>

        {/* Bookings List Section */}
        <section className="list-section">
          <h2 className="list-title">Your Bookings</h2>
          <div className="list-container">
            <div className="list-row">
              <article className="list-item">
                <span className="item-icon" aria-hidden="true">📅</span>
                <div className="item-details">
                  <h3 className="item-title">Booking with Customer 1</h3>
                  <p className="item-subtitle">Date: MM/DD/YYYY</p>
                </div>
                <p className="item-price">Time: HH:MM AM/PM</p>
              </article>
              <article className="list-item">
                <span className="item-icon" aria-hidden="true">📅</span>
                <div className="item-details">
                  <h3 className="item-title">Booking with Customer 2</h3>
                  <p className="item-subtitle">Date: MM/DD/YYYY</p>
                </div>
                <p className="item-price">Time: HH:MM AM/PM</p>
              </article>
            </div>
          </div>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cd7271f9454ae7190680fc214c295d67b626e58117a242802df2a71b681eded?placeholderIfAbsent=true&apiKey=67fda85d73b3434bbb9deb1c2ad56b77" 
            alt="" 
            className="section-bg" 
          />
        </section>

        {/* Issues Section */}
        <section className="section">
          <div className="section-container">
            <h2 className="section-title">Respond to Issues</h2>
            <p className="section-description">View and address reported issues</p>
          </div>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cd7271f9454ae7190680fc214c295d67b626e58117a242802df2a71b681eded?placeholderIfAbsent=true&apiKey=67fda85d73b3434bbb9deb1c2ad56b77" 
            alt="" 
            className="section-bg" 
          />
        </section>

        {/* Issues List Section */}
        <section className="list-section">
          <h2 className="list-title">Reported Issues</h2>
          <div className="list-container">
            <div className="list-row">
              <article className="list-item">
                <span className="item-icon" aria-hidden="true">⚠️</span>
                <div className="item-details">
                  <h3 className="item-title">Issue 1</h3>
                  <p className="item-subtitle">Reported by User 1</p>
                </div>
              </article>
              <article className="list-item">
                <span className="item-icon" aria-hidden="true">⚠️</span>
                <div className="item-details">
                  <h3 className="item-title">Issue 2</h3>
                  <p className="item-subtitle">Reported by User 2</p>
                </div>
              </article>
            </div>
          </div>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cd7271f9454ae7190680fc214c295d67b626e58117a242802df2a71b681eded?placeholderIfAbsent=true&apiKey=67fda85d73b3434bbb9deb1c2ad56b77" 
            alt="" 
            className="section-bg" 
          />
        </section>
      </main>
    </section>
  );
}

export default ServiceProviderDashboard;