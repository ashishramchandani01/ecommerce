// Men.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Men = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching men products:', error);
      }
    };

    fetchMenProducts();
  }, []);

  const settings = {
    dots: false,
    infinite: products.length > 6, // Enable infinite loop only if there are more than 6 products
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6
  };

  return (
    <div className="men-container">
        <div className='container mx-0 inline-block w-full'>
            <h2 className="section-title">Men's Products</h2>
            {products.length > 6 ? (
                <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className="product-item">
                    <img src={`https://via.placeholder.com/150?text=${product.title}`} alt={product.title} />
                    <p className="product-name">{product.title}</p>
                    <p className="product-price">${Math.floor(Math.random() * 100) + 1}.99</p>
                    </div>
                ))}
                </Slider>
            ) : (
                <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                    <img src={`https://via.placeholder.com/150?text=${product.title}`} alt={product.title} />
                    <p className="product-name">{product.title}</p>
                    <p className="product-price">${Math.floor(Math.random() * 100) + 1}.99</p>
                    </div>
                ))}
                </div>
            )}
            
        </div>
    </div>
  );
};

export default Men;
