import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/RegistrationPage' element={<RegistrationPage />} />
          <Route path='/LoginPage' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
