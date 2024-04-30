import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear errors when the user starts typing
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    const validationErrors = {};
    if (!formData.firstName) validationErrors.firstName = 'Please enter your first name';
    if (!formData.lastName) validationErrors.lastName = 'Please enter your last name';
    if (!formData.email) validationErrors.email = 'Please enter your email';
    if (!formData.mobile) validationErrors.mobile = 'Please enter your mobile number';
    if (!formData.password) validationErrors.password = 'Please enter your password';
    if (!formData.confirmPassword) validationErrors.confirmPassword = 'Please confirm your password';
    if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Send data to the mock API using JSON Server
      await axios.post('http://localhost:8000/users', formData);
      // Show success modal
      document.getElementById('successModal').classList.remove('hidden');
      // Reset form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Error registering user');
    }
  };

  return (
    <div className="flex items-center justify-center">
      {/* Registration Form */}
      <div className="w-1/2 p-8 border border-gray-300 rounded-lg pt-5">
        <h2 className="text-center font-bold mb-5">Registration Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-between">
          <div className="mb-4 w-full md:w-1/2  pr-3   pl-3">
            <label htmlFor="firstName" className="block text-sm font-bold mb-2">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="input-field" style={{ border: '1px solid #CBD5E0', padding: '0.5rem', width: '100%' }} />
            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
          </div>
          <div className="mb-4 w-full md:w-1/2 pr-3   pl-3">
            <label htmlFor="lastName" className="block text-sm font-bold mb-2">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="input-field" style={{ border: '1px solid #CBD5E0', padding: '0.5rem' }} />
            {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
          </div>
          <div className="mb-4 w-full md:w-1/2 pr-3   pl-3">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input-field" style={{ border: '1px solid #CBD5E0', padding: '0.5rem' }} />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </div>
          <div className="mb-4 w-full md:w-1/2 pr-3   pl-3">
            <label htmlFor="mobile" className="block text-sm font-bold mb-2">Mobile No:</label>
            <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="input-field" style={{ border: '1px solid #CBD5E0', padding: '0.5rem' }} />
            {errors.mobile && <span className="text-red-500 text-xs">{errors.mobile}</span>}
          </div>
          <div className="mb-4 w-full md:w-1/2 pr-3   pl-3">
            <label htmlFor="password" className="block text-sm font-bold mb-2">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="input-field" style={{ border: '1px solid #CBD5E0', padding: '0.5rem' }} />
            {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
          </div>
          <div className="mb-4 w-full md:w-1/2 pr-3   pl-3">
            <label htmlFor="confirmPassword" className="block text-sm font-bold mb-2">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="input-field" style={{ border: '1px solid #CBD5E0', padding: '0.5rem' }} />
            {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword}</span>}
          </div>
          <div className="w-full text-center">
            <button type="submit" className="btn-main px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md">Create Account</button>
          </div>
        </form>
      </div>
      {/* Sign In Section */}
      <div className="ml-8 flex flex-col justify-center">
        <p className="text-xl font-semibold mb-4">Already a member?</p>
        <button className="btn-main px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md"><Link to="/login" >Sign In</Link></button>
      </div>
    </div>
  );
};

export default RegistrationForm;
