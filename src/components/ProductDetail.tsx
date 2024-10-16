import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.message || 'Failed to fetch product details');
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (user && product) {
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
    } else if (!user) {
      navigate('/login');
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!product) return <div className="text-center mt-8">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 btn btn-secondary"
      >
        &larr; Back
      </button>
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
          <img src={product.image} alt={product.title} className="max-w-full max-h-[400px] object-contain" />
        </div>
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
          <p className="text-3xl font-bold mb-6 text-blue-600">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">Category: <span className="font-semibold capitalize">{product.category}</span></p>
          <button
            onClick={handleAddToCart}
            className="btn btn-primary w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;