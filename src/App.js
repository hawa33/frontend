import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import Browse from './Pages/Browse';
import Footer from './Components/Footer/Footer';
import Featured from './Components/Featured/Featured';
import ServiceProvider from './Components/ServiceProvider/ServiceProvider';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <ConditionalWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ConditionalWrapper>
    </BrowserRouter>
  );
}

const ConditionalWrapper = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ['/register', '/login'].includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Featured />}
      {!isAuthPage && <ServiceProvider />}
      {children}
    </>
  );
};

const Home = () => (
  <div>
    
  </div>
);

const About = () => (
  <div>
    <h1>About Page</h1>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Page</h1>
  </div>
);

export default App;
