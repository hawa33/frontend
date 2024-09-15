import React from 'react';
import './Browse.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Browse = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the home button click
  const handleHomeClick = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <>
      <header className="header">
        <div className="logo" role="img" aria-label="Site logo"></div>
        <h1 className="site-title">Browse Services</h1>
      </header>

      <div className='home-button'>
        <button className="home-btn" tabIndex="0" onClick={handleHomeClick}>
          Home
        </button>
      </div>

      <main className="service-finder">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-title">Find the Perfect Service Provider</h2>
              <p className="hero-description">
                Search below and discover your ideal service provider today.
              </p>
              <form className="hero-search-form">
                <label htmlFor="service-search" className="visually-hidden">
                  Search for services
                </label>
                <input
                  type="search"
                  id="service-search"
                  className="search-input-large"
                  placeholder="Search for services..."
                  aria-label="Search for services"
                />
                <button type="submit" className="search-button">
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="categories-section">
          <div className="categories-content">
            <h2 className="categories-title">Popular Categories</h2>
            <div className="categories-grid">
              <div className="category-item">
                <div
                  className="category-icon"
                  role="img"
                  aria-label="Plumbing icon"
                >
                  🔧
                </div>
                <p className="category-name">Plumbing</p>
              </div>
              <div className="category-item">
                <div
                  className="category-icon"
                  role="img"
                  aria-label="Home Cleaning icon"
                >
                  🧹
                </div>
                <p className="category-name">Home Cleaning</p>
              </div>
              <div className="category-item">
                <div
                  className="category-icon"
                  role="img"
                  aria-label="Beauty Services icon"
                >
                  ✂️
                </div>
                <p className="category-name">Beauty Services</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Browse;
