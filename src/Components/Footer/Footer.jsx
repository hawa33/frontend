import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
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
    </div>
  )
}

export default Footer
