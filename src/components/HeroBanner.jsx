import React from 'react';
import Banner from '../assests/images/shopping-bag-cart.jpg';

const HeroBanner = () => {
  return (
    <div className="hero-banner relative">
            <div className="image-main">
                <img src={Banner} alt="hero-banner" className="max-w-full" loading="lazy" />
            </div>
            <div className='container mx-auto'>
                <div className="mx-auto absolute top-1/2">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Commerce Store</h1>
                    <p className="text-lg">Shop the latest trends in fashion, electronics, home goods, and more!</p>
                </div>
            </div>
    </div>
  );
};

export default HeroBanner;
