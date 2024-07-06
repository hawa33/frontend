import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ServiceProvider from './Components/ServiceProvider/ServiceProvider';
import Featured from './Components/Featured/Featured';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import Browse from './Pages/Browse';


const App = () => (
  <BrowserRouter>
    
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<FeaturedServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/browse" element={<Browse />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

const Layout = () => {
  const location = useLocation();
  const showNavbar = ['/', '/featured', '/browse', '/login', '/register', '/browse'].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <ServiceProvider />
      <Outlet />
      <Footer />
    </>
  );
};

const AuthLayout = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

const Home = () => (
  <div>
   
  </div>
);

const FeaturedServices = () => (
  <>
    <Featured />
    {/* Add featured services content */}
  </>
);

const About = () => (
  <div>
    <h1>About Page</h1>
    {/* Add about page content */}
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Page</h1>
    {/* Add contact page content */}
  </div>
);

export default App;
