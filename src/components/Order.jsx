import React from 'react';

const Order = () => {
  // Retrieve customer information from local storage
  const customerInfo = JSON.parse(localStorage.getItem('customerInfo')) || {};
  // Retrieve cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('lastAddedProduct')) || [];
  // Calculate subtotal from cart items
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  // Calculate tax
  const tax = subtotal * 0.05;
  // Calculate grand total
  const grandTotal = subtotal + tax;

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-3/4 border-2 ">
        <h2 className="text-3xl font-semibold mb-6 text-center">Thank you for your order!</h2>
        
        {/* Customer Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Customer Information</h3>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="py-2">First Name:</td>
                <td className="py-2">{customerInfo.firstName}</td>
              </tr>
              <tr>
                <td className="py-2">Last Name:</td>
                <td className="py-2">{customerInfo.lastName}</td>
              </tr>
              <tr>
                <td className="py-2">Mobile Number:</td>
                <td className="py-2">{customerInfo.mobileNumber}</td>
              </tr>
              <tr>
                <td className="py-2">Address:</td>
                <td className="py-2">{customerInfo.address}</td>
              </tr>
              <tr>
                <td className="py-2">Pincode:</td>
                <td className="py-2">{customerInfo.pincode}</td>
              </tr>
              <tr>
                <td className="py-2">State:</td>
                <td className="py-2">{customerInfo.state}</td>
              </tr>
              <tr>
                <td className="py-2">Country:</td>
                <td className="py-2">{customerInfo.country}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Order Summary */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="py-2">Subtotal:</td>
                <td className="py-2">${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2">Tax (5%):</td>
                <td className="py-2">${tax.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2">Grand Total:</td>
                <td className="py-2">${grandTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Cart Items */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Cart Items</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="py-2">{item.title}</td>
                  <td className="py-2 text-center">${item.price.toFixed(2)}</td>
                  <td className="py-2 text-center">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
