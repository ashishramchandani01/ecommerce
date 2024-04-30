import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="newsletter">
          <input
            type="email"
            placeholder="Enter your email for newsletter"
            className="bg-gray-700 text-white px-4 py-2 rounded-md w-72 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Subscribe
          </button>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Your E-commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
