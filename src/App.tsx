import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:category" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
                <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;