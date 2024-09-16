import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Loader from '../Components/Loader/Loader'; // Import the Loader component

const LoginPage = ({ setIsLoggedIn, setUserRole }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading status
  const formRef = useRef(null);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Simulated login logic for demonstration
    // Replace with actual login logic using an API call or authentication service
    setTimeout(() => {
      if (email === 'provider@example.com' && password === 'password') {
        setIsLoggedIn(true);
        setUserRole('serviceProvider');
        navigate('/service-dashboard');
      } else if (email === 'customer@example.com' && password === 'password') {
        setIsLoggedIn(true);
        setUserRole('customer');
        navigate('/customer');
      } else {
        alert('Invalid email or password. Please try again.');
      }
      setLoading(false); // Stop loading
    }, 1000); // Simulate network delay
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="login-page">
      {loading && <Loader />} {/* Show loader when loading */}
      
      <header className="header">
        <div className="logo-container">
          <div className="logo"></div>
          <h1 className="brand-name">Karmadhara</h1>
        </div>
        <nav className="nav-menu">
          <button className="nav-item" onClick={() => navigate('/')}>Home</button>
          <button className="nav-item" onClick={() => navigate('/about')}>About</button>
          <button className="nav-item button" onClick={scrollToForm}>Login</button>
        </nav>
      </header>
      
      <h2 className="welcome-message">Welcome Back!</h2>
      
      <main className="login-container" ref={formRef}>
        <div className="login-content">
          <div className="login-grid">
            <h3 className="login-title" id="login-title">Login to Your Account</h3>
            <form className="login-form-container" aria-labelledby="login-title" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  placeholder="Enter your password"
                  aria-label="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="form-actions">
                <button type="submit" className="login-button button">Login</button>
                <button type="button" className="forgot-password" onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
