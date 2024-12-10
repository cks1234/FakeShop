import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider">E-Shop</Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><Link to="/" className="hover:text-blue-200 transition duration-300">Products</Link></li>
            <li>
              <Link to="/cart" className="flex items-center hover:text-blue-200 transition duration-300 relative">
                <ShoppingCart className="mr-1" size={20} />
                Cart
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </li>
            {user ? (
              <>
                <li className="flex items-center">
                  <User className="mr-1" size={20} />
                  <span className="font-medium">{user.username}</span>
                </li>
                <li>
                  <button onClick={logout} className="btn btn-secondary text-sm">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="btn btn-secondary text-sm">Login</Link></li>
                <li><Link to="/register" className="btn btn-primary text-sm">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;