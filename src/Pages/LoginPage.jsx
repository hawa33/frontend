import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importing useHistory from react-router-dom
import './Login.css';

const LoginPage = () => {
  const history = useHistory(); // Using useHistory hook

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., API call)
    // Assuming login is successful, redirect based on user role
    if (email === 'admin@example.com' && password === 'admin') {
      history.push('/admin'); // Redirect to admin page
    } else {
      history.push('/customer'); // Redirect to customer page
    }
  };

  return (
    <div className="login-page">
      <header className="header">
        <div className="logo-container">
          <div className="logo"></div>
          <h1 className="brand-name">Karmadhara</h1>
        </div>
        <nav className="nav-menu">
          <button className="nav-item" onClick={() => history.push('/')}>Home</button>
          <button className="nav-item" onClick={() => history.push('/about')}>About</button>
          <button className="nav-item button" onClick={() => history.push('/login')}>Login</button>
        </nav>
      </header>
      
      <h2 className="welcome-message">Welcome Back!</h2>
      
      <main className="login-container">
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
                <button type="button" className="forgot-password" onClick={() => history.push('/forgot-password')}>Forgot Password?</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default LoginPage;
