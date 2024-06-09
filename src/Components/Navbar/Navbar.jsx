import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <section className="container">
        <div className="content-wrapper">
          <h1 className="title">Welcome to Karmadhara!</h1>
          <p className="subtitle">Find and offer services in one place.</p>
          <div className="button-wrapper">
            <button className="button register-button" tabIndex="0">Register</button>
            <button className="button browse-button" tabIndex="0">Browse Services</button>
           
          </div>
        </div>
      </section>

      <section class="featured-wrapper">
  <div class="provider-info">
    <div class="provider-image" tabindex="0" role="img" aria-label="Service Provider Image"></div>
    <div class="provider-details">
      <h2 class="featured-title">Featured Service Providers</h2>
      <p class="featured-subtitle">
        <a href="#top-rated">Explore top-rated service providers</a>
      </p>
    </div>
  </div>
</section>

    <section className="container2">
        <div className="wrapper">
          <div className="flex-container">
            <div className="column-wide">
              <h2 className="title2">Featured Service Providers</h2>
            </div>
            <div className="column-content">
              <div className="flex-row">
                <article className="service-card">
                  <div className="emoji-circle">😃</div>
                  <h3 className="provider-name">Service Provider Name</h3>
                  <p className="rating">Rating: 4.5</p>
                  <p className="summary">Summary of services</p>
                </article>
                <article className="service-card">
                  <div className="emoji-circle">😊</div>
                  <h3 className="provider-name">Service Provider Name</h3>
                  <p className="rating">Rating: 4.7</p>
                  <p className="summary">Summary of services</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container3">
        <div className="content-wrapper3">
          <h2 className="heading">About Us</h2>
          <p className="subheading">Learn more about our platform</p>
          <button className="cta-button">Contact</button>
        </div>
      </section>
      <nav className="footer-nav">
  <a href="#about" className="footer-link" tabIndex="0">About</a>
  <a href="#contact" className="footer-link" tabIndex="0">Contact</a>
  <a href="#terms" className="footer-link" tabIndex="0">Terms of Service</a>
  <a href="#privacy" className="footer-link" tabIndex="0">Privacy Policy</a>
</nav>
    </>
  );
};

export default Navbar;
