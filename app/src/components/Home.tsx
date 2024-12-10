import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const Home: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          axios.get('https://fakestoreapi.com/products/categories'),
          axios.get('https://fakestoreapi.com/products')
        ]);
        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Welcome to Our E-Shop</h1>
      {categories.map((category) => (
        <div key={category} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 capitalize text-gray-700 border-b-2 border-blue-500 pb-2">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter((product) => product.category === category)
              .slice(0, 4)
              .map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="card group">
                  <div className="relative overflow-hidden pb-[100%]">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 truncate group-hover:text-blue-600 transition-colors duration-300">{product.title}</h3>
                    <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
          </div>
          <div className="mt-6 text-center">
            <Link to={`/category/${category}`} className="btn btn-primary inline-block">
              View all {category}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;