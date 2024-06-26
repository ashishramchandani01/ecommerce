import './App.css';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from './components/Men';
import Women from './components/Women';
import Cart from './components/Cart';
import React, { useState , useEffect} from 'react';
import Checkout from './components/Checkout';
import Order from './components/Order';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0); // Initialize subtotal with 0

const setToLocal = (items) => {
  localStorage.setItem("item", JSON.stringify(items))
  setCartItems(items)
}

useEffect(() => {
  const subTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  setSubtotal(subTotal); // Update the subtotal state
}, [cartItems]);

  const getCartItemCount = () => {
    return cartItems.length;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout cartItemCount={getCartItemCount()} />}>
            <Route index element={<HomePage />} />
            <Route path="/men" element={<Men cartItems={cartItems} setCartItems={setToLocal} />}/>
            <Route path="/women" element={<Women cartItems={cartItems} setCartItems={setToLocal} />}/>
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} subtotal={subtotal} />}/>
            <Route path="/checkout" element={<Checkout subtotal={subtotal} />} />
            <Route path="/order" element={<Order/>} />
            <Route path="/registration" element={<RegistrationForm/>} />
            <Route path="/login" element={<LoginForm/>} />
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
