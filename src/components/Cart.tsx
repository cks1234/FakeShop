import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.productId} className="flex items-center border-b py-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4" />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.productId)}
                  className="ml-4 text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Link
              to="/checkout"
              className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;