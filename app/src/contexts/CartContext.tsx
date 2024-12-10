import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface CartItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const storedCart = localStorage.getItem(`cart_${user.userId}`);
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } else {
      setCartItems([]);
    }
  }, [user]);

  const saveCart = (items: CartItem[]) => {
    if (user) {
      localStorage.setItem(`cart_${user.userId}`, JSON.stringify(items));
    }
  };

  const addToCart = async (item: CartItem) => {
    const updatedItems = [...cartItems];
    const existingItem = updatedItems.find(i => i.productId === item.productId);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      updatedItems.push(item);
    }
    setCartItems(updatedItems);
    saveCart(updatedItems);
  };

  const removeFromCart = async (productId: string) => {
    const updatedItems = cartItems.filter(item => item.productId !== productId);
    setCartItems(updatedItems);
    saveCart(updatedItems);
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    const updatedItems = cartItems.map(item =>
      item.productId === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
    saveCart(updatedItems);
  };

  const clearCart = async () => {
    setCartItems([]);
    if (user) {
      localStorage.removeItem(`cart_${user.userId}`);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};