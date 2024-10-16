import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const ProductList: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Product[]>(
          category
            ? `https://fakestoreapi.com/products/category/${category}`
            : 'https://fakestoreapi.com/products'
        );
        setProducts(response.data);
        setError(null);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.message || 'Failed to fetch products');
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const handleAddToCart = async (product: Product) => {
    if (user) {
      try {
        await addToCart({
          productId: product.id.toString(),
          title: product.title,
          price: product.price,
          quantity: 1,
          image: product.image,
        });
        alert('Product added to cart!');
      } catch (err) {
        if (err instanceof Error) {
          alert(`Failed to add product to cart: ${err.message}`);
        } else {
          alert('Failed to add product to cart. Please try again.');
        }
      }
    } else {
      alert('Please log in to add items to your cart.');
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {category ? `${category} Products` : 'All Products'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className="w-full h-48 object-contain p-4" />
            </Link>
            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">{product.title}</h2>
              </Link>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;