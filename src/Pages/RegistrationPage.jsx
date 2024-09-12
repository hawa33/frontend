import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const UserTypeSelection = ({ selectUserType, scrollToForm, selectedUserType }) => (
  <div className="user-type-selection">
    <h2>User Type Selection</h2>
    <p>Choose to register as a Customer or Service Provider</p>
    <button
      className={`btn ${selectedUserType === 'customer' ? 'selected' : ''}`}
      onClick={() => selectUserType('customer')}
    >
      Customer
    </button>
    <button
      className={`btn ${selectedUserType === 'service-provider' ? 'selected' : ''}`}
      onClick={() => selectUserType('service-provider')}
    >
      Service Provider
    </button>
    <p>Select the type of user you want to register as</p>
    <button className="btn" onClick={scrollToForm}>Next</button>
  </div>
);

const RegistrationForm = ({ register }) => (
  <div className="registration-form">
    <h2>Registration Form</h2>
    <div>
      <label>Name</label>
      <input type="text" placeholder="Enter your name" />
      <small>Your full name</small>
    </div>
    <div>
      <label>Email</label>
      <input type="email" placeholder="Enter your email" />
      <small>A valid email address</small>
    </div>
    <div>
      <label>Phone Number</label>
      <input type="text" placeholder="Enter your phone number" />
      <small>Your contact number</small>
    </div>
    <div>
      <label>Location</label>
      <input type="text" placeholder="Enter your location" />
      <small>Where you are based</small>
    </div>
    <div>
      <label>Password</label>
      <input type="password" placeholder="Enter your password" />
      <small>Minimum 8 characters</small>
    </div>
    <div>
      <label>Confirm Password</label>
      <input type="password" placeholder="Confirm your password" />
      <small>Re-enter your password</small>
    </div>
    <button className="btn" onClick={register}>Register</button>
  </div>
);

const ServiceProviderAdditional = ({ uploadDocument }) => (
  <div className="service-provider-additional">
    <h2>Additional Field for Service Providers</h2>
    <p>Upload verification document for Service Providers</p>
    <button className="btn" onClick={uploadDocument}>Upload</button>
  </div>
);

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');
  const formRef = useRef(null);

  const selectUserType = (type) => {
    setUserType(type);
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const register = () => {
    // Registration logic here
  };

  const uploadDocument = () => {
    // Document upload logic here
  };

  return (
    <div className="registration-page">
      <header>
        <h1>Registration Page</h1>
        <button className="btn" onClick={() => navigate('/')}>Home</button>
      </header>
      <main>
        <UserTypeSelection 
          selectUserType={selectUserType} 
          scrollToForm={scrollToForm} 
          selectedUserType={userType}
        />
        <div ref={formRef}>
          <RegistrationForm register={register} />
          {userType === 'service-provider' && <ServiceProviderAdditional uploadDocument={uploadDocument} />}
        </div>
      </main>
    </div>
  );
}

export default RegistrationPage;