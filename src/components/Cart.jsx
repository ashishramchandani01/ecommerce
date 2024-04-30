import React, { useEffect } from 'react';
import OrderSummary from './Ordersummary';
import {  Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems, subtotal}) => {
  
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('lastAddedProduct', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    // Clear all items from the cart
    setCartItems([]);
    localStorage.removeItem('lastAddedProduct');
  };

  useEffect(() => {
    // Retrieve cart items from local storage when the component mounts
    const storedItems = JSON.parse(localStorage.getItem('lastAddedProduct')) || [];
    setCartItems(storedItems);
  }, [setCartItems]); 

  return (
    <div className="cart-container w-full inline-block">
      <div className='container mx-auto w-full'>
        <h2 className="text-3xl font-semibold text-center mb-6 mt-6">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className="empty-cart text-center">
            <p>Your shopping cart is empty.</p>
            <p>Add some products to start shopping!</p>
          </div>
        ) : (
          <div className="cart-items">
            <table className="min-w-full divide-y divide-gray-200 mb-4">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap"><img src={item.image} alt={item.title} className="w-16 h-16" /></td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button onClick={() => removeFromCart(index)} className="text-red-600 hover:text-red-900">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart-bottom flex  items-center justify-between">
            <div className="btn-main">
                <button onClick={clearCart} className="bg-gray-200 text-gray-700 py-2 px-4 rounded mr-2">Clear Cart</button>
                <button className="bg-gray-800 text-white py-2 px-4 rounded"><Link to="/checkout">Proceed to Checkout</Link></button>
            </div>
            <OrderSummary subtotal={subtotal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
