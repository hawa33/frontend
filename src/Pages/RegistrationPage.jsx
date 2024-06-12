import React from 'react';

import { useNavigate } from 'react-router-dom';
import './Registration.css';


const RegistrationPage = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };


  const selectUserType = (type) => {
    console.log(`Selected user type: ${type}`);
    if (type === 'Service Provider') {
        // Logic for handling admin user type
        console.log('Service Provider Selected');
    } else if (type === 'customer') {
        // Logic for handling customer user type
        console.log('Customer user selected');
    } else {
        // Default logic if user type is not recognized
        console.log('Unknown user type selected');
    }
};


  const goToNext = () => {
    console.log('Go to next step');
    navigate('/next-step');
  };

  const register = () => {
    console.log('Register user');
    // Add your registration logic here
  };

  const uploadDocument = () => {
    console.log('Upload document');
    // Add your document upload logic here
  };

  return (
    <div className="div">
      <div className="div-2">
        <div className="div-3"></div>
        <div className="div-4">Registration Page</div>
        <div className="div-5">
          <button className="btn div-6" onClick={navigateHome}>Home</button>
         
        </div>
      </div>
      <div className="div-9">
        <div className="div-10">
          <div className="div-11">
            <div className="column">
              <div className="div-12">
                <div className="div-13">User Type Selection</div>
                <div className="div-14"> Choose to register as a Customer or Service Provider </div>
              </div>
            </div>
            <div className="column-2">
              <div className="div-15">
                <div className="div-16">User Type</div>
                <div className="div-17">
                  <button className="btn div-18" onClick={() => selectUserType('customer')}>Customer</button>
                  <button className="btn div-19" onClick={() => selectUserType('service-provider')}>Service Provider</button>
                </div>
                <div className="div-20"> Select the type of user you want to register as </div>
                <button className="btn div-21" onClick={goToNext}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-22">
        <div className="div-23">
          <div className="div-24">Registration Form</div>
          <div className="div-25">
            <div className="div-26">
              <div className="div-27">Name</div>
              <input type="text" className="div-28" placeholder="Enter your name" />
              <div className="div-29">Your full name</div>
            </div>
            <div className="div-30">
              <div className="div-31">Email</div>
              <input type="email" className="div-32" placeholder="Enter your email" />
              <div className="div-33">A valid email address</div>
            </div>
          </div>
          <div className="div-34">
            <div className="div-35">
              <div className="div-36">Phone Number</div>
              <input type="text" className="div-37" placeholder="Enter your phone number" />
              <div className="div-38">Your contact number</div>
            </div>
            <div className="div-39">
              <div className="div-40">Location</div>
              <input type="text" className="div-41" placeholder="Enter your location" />
              <div className="div-42">Where you are based</div>
            </div>
          </div>
          <div className="div-43">
            <div className="div-44">
              <div className="div-45">Password</div>
              <input type="password" className="div-46" placeholder="Enter your password" />
              <div className="div-47">Minimum 8 characters</div>
            </div>
            <div className="div-48">
              <div className="div-49">Confirm Password</div>
              <input type="password" className="div-50" placeholder="Confirm your password" />
              <div className="div-51">Re-enter your password</div>
            </div>
          </div>
          <button className="btn div-52" onClick={register}>Register</button>
        </div>
      </div>
      <div className="div-53">
        <div className="div-54">
          <div className="div-55">
            <div className="column-3">
              <div className="div-56">
                <div className="div-57">Additional Field for Service Providers</div>
                <div className="div-58"> Upload verification document for Service Providers </div>
                <button className="btn div-59" onClick={uploadDocument}>Upload</button>
              </div>
            </div>
            <div className="column-4">
              <div className="div-60">
                <div className="div-61">
                  <div className="div-62">📄</div>
                  <div className="div-63">
                    <div className="div-64">Verification Document</div>
                    <div className="div-65">Upload a document for verification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
