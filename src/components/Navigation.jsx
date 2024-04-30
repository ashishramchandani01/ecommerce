import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import mainlogo from '../assests/images/mainlogo.png';

const NavigationBar = ({ cartItemCount }) => {
  const Navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login status
    setIsDropdownOpen(false); // Close the dropdown
    Navigate('/'); // Redirect to the home page
  };

  // Function to handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/"><img src={mainlogo} alt="Logo" className="h-10" /></Link>
        </div>
        <div className="menu">
          <ul className="flex">
            <li className="mr-6 cursor-pointer"><Link to="/men">Men</Link></li>
            <li className="mr-6 cursor-pointer"><Link to="/women">Women</Link></li>
          </ul>
        </div>
        <div className="icons flex items-center relative">
          <FaSearch className="mr-4 cursor-pointer" />
          <Link to="/cart" className="relative">
            <FaShoppingCart className="mr-4 cursor-pointer" />
            {cartItemCount > 0 && (
              <span className="bg-red-500 rounded-full w-4 h-4 flex items-center justify-center absolute top-0 right-0 -mt-15 mr-1 text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>
          {isLoggedIn ? (
            <div className="relative">
              <FaUser className="cursor-pointer" onClick={toggleDropdown} />
              {isDropdownOpen && (
                <div className="dropdown absolute top-10  bg-white border  text-black  w-40  -right-6 border-gray-300 rounded-md shadow-lg z-10">
                  <ul>
                    <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => Navigate('/my-account')}>My Account</li>
                    <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
              {isDropdownOpen ? <FaAngleUp className="absolute -top-1  left-4 mt-2 mr-4" /> : <FaAngleDown className="absolute -top-1  left-4 mt-2 mr-4" />}
            </div>
          ) : (
            <Link to='/registration'><FaUser className="cursor-pointer" /></Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
