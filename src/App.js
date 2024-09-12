import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ServiceProvider from './Components/ServiceProvider/ServiceProvider';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import Browse from './Pages/Browse';
import CustomerPage from './Pages/CustomerPage';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FeaturedServices from './Pages/FeaturedServices';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout for Homepage with ServiceProvider */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Public Routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/featured" element={<FeaturedServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Route>

        {/* Authenticated Routes */}
        <Route element={<AuthLayout isLoggedIn={isLoggedIn} />}>
          <Route path="/customer" element={<CustomerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// Main layout (navbar + footer) for most pages
const MainLayout = () => {
  return (
    <>
      <Outlet /> {/* This is where the page content will be rendered */}
      <Footer />
    </>
  );
};

// AuthLayout for protected routes
const AuthLayout = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

// Special layout for homepage (with ServiceProvider)
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <ServiceProvider />
      <Outlet /> {/* Home content will be injected here */}
      <Footer />
    </>
  );
};

export default App;
