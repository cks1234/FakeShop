import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

import userRoutes from './routes/userRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (pluralization 옵션 제거)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
