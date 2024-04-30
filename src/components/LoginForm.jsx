import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch user data from the mock API using JSON Server
      const response = await axios.get(`http://localhost:8000/users?email=${formData.email}&password=${formData.password}`);
      
      if (response.data.length === 1) {
        localStorage.setItem('isLoggedIn', true);
         
        // If user found, redirect to accounts page
        navigate('/');
      } else {
        // If user not found or credentials are incorrect, show error message
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error logging in');
    }
  };

  return (
    <div className="w-1/2 p-8 border border-gray-300 rounded-lg  mx-auto mt-5 text-center">
      <h2 className="text-center font-bold">Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input-field" style={{ border: '1px solid #CBD5E0', padding: '0.5rem', width:'400px' }} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="input-field" style={{ border: '1px solid #CBD5E0', padding: '0.5rem', width:'400px' }} />
        </div>
        <button type="submit" className="btn-main px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md">Login</button>
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
