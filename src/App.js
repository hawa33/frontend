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
import ServiceProviderDashboard from './Pages/ServiceProviderDashboard';
import TopRated from './Components/TopRated/TopRated';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(''); // Track user role

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
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Route>

        {/* Authenticated Routes */}
        <Route element={<AuthLayout isLoggedIn={isLoggedIn} userRole={userRole} />}>
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/service-provider" element={<ServiceProvider />} /> {/* Route for ServiceProvider */}
        </Route>

        {/* Dashboard specific layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/service-dashboard" element={<ServiceProviderDashboard />} /> {/* Correct route for dashboard */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// Main layout (navbar + footer) for most pages
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This is where the page content will be rendered */}
      <Footer />
    </>
  );
};

// AuthLayout for protected routes
const AuthLayout = ({ isLoggedIn, userRole }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return (
    <>
      <Navbar />
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
      <ServiceProvider /> {/* Including ServiceProvider component */}
      <Outlet /> {/* Home content will be injected here */}
      <Footer />
    </>
  );
};

// DashboardLayout for ServiceProviderDashboard (no Navbar)
const DashboardLayout = () => {
  return (
    <>
      <Outlet /> {/* Only dashboard content will be rendered */}
      <Footer />
    </>
  );
};

export default App;
