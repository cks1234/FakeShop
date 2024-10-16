import mongoose from 'mongoose';
import dotenv from 'dotenv';
import axios from 'axios';
import Product from './models/Product.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Product.deleteMany({});
    console.log('Cleared existing products');

    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;

    const createdProducts = await Product.insertMany(products);
    console.log(`Inserted ${createdProducts.length} products from Fake Store API`);

    console.log('Database seeding completed');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedDatabase();