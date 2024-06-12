import React from 'react';
import './ServiceProvider.css';

const ServiceProvide = () => {
  return (
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
  );
}

export default ServiceProvide;
