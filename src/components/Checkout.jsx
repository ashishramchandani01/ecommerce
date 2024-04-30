import React, { useState } from 'react';
import OrderSummary from './Ordersummary';
import { Link } from 'react-router-dom';

const Checkout = ({ subtotal }) => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    address: '',
    pincode: '',
    state: '',
    country: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  
  // Submit form data and save to local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('customerInfo', JSON.stringify(formData));
    // Add logic to handle form submission (e.g., send data to server)
  };

  return (
    <div className="checkout-container mt-5">
      <div className="container w-full flex items-center mx-auto">
        {/* Customer form */}
        <form className="customer-form w-full md:w-1/2 p-4 border border-gray-400 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">Customer Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group flex flex-wrap">
              <label htmlFor="firstName" className="mr-2">First Name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="input-field border border-gray-400 rounded px-3 py-2 w-full" />
            </div>
            <div className="form-group flex flex-wrap">
              <label htmlFor="lastName" className="mr-2">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="input-field border border-gray-400 rounded px-3 py-2 w-full" />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input type="tel" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required className="input-field border border-gray-400 rounded px-3 py-2 w-full" />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="email" id="Email" name="Email" value={formData.Email} onChange={handleChange} required className="input-field border border-gray-400 rounded px-3 py-2 w-full" />
            </div>
            <div className="form-group flex flex-wrap">
              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" value={formData.address} onChange={handleChange} required className="input-field border border-gray-400 rounded px-3 py-2 w-full" />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required className="input-field border border-gray-400 rounded px-3 py-2 w-full" />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required className="input-field border border-gray-400 rounded px-3 py-2 w-full" />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required className="input-field border border-gray-400 rounded px-3 py-2 w-full" />
            </div>
          </div>
          <button type="submit" className="btn-main mt-4 mx-auto block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to="/order" >Place Order</Link></button>
        </form>
        
        {/* Order summary */}
        <div className="order-summary-container w-full md:w-1/2 px-4">
          <OrderSummary subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
