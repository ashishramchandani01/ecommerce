import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Men = () => {
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const menResponse = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
        setMenProducts(menResponse.data.map(product => ({ ...product, quantity: 1 })));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart =  async(product) => {
    const existingProducts = JSON.parse(localStorage.getItem('lastAddedProduct')) || [];
    const existingProductIndex = existingProducts.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Product already exists in cart, update its quantity
      existingProducts[existingProductIndex].quantity += 1;
    } else {
      // Product doesn't exist in cart, add it with quantity 1
      const productData = {
        id: product.id,
        title: product.title,
        price: Math.floor(Math.random() * 100) + 1.99,
        image: `https://via.placeholder.com/150?text=${product.title}`,
        quantity: 1 // Initial quantity
      };
      existingProducts.push(productData);
    }

    localStorage.setItem('lastAddedProduct', JSON.stringify(existingProducts));
  // Update loading state to show "Adding to Cart..."
  setMenProducts(prevProducts => prevProducts.map(prevProduct => {
    if (prevProduct.id === product.id) {
      return { ...prevProduct, loading: true };
    }
    return prevProduct;
  }));

  // Simulate delay to show "Adding to Cart..." text for a brief moment
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Set loading state back to false after addition is completed
  setMenProducts(prevProducts => prevProducts.map(prevProduct => {
    if (prevProduct.id === product.id) {
      return { ...prevProduct, loading: false };
    }
    return prevProduct;
  }));
};

return (
  <div className="men-container">
    <div className='container w-full inline-block'>
      <h2 className="section-title">Men's Products</h2>
      <div className="product-grid">
        {menProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={`https://via.placeholder.com/150?text=${product.title}`} alt={product.title} />
            <p className="product-name">{product.title}</p>
            <p className="product-price">${Math.floor(Math.random() * 100) + 1}.99</p>
            <button
              className="add-to-cart-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleAddToCart(product)}
              disabled={product.loading}
            >
              {product.loading ? 'Adding to Cart...' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Men;