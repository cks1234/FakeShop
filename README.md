# FakeShop

**FakeShop** is a full-stack web application that simulates a simple e-commerce platform with user authentication and product management features. The backend is built using **Node.js** and **Express**, and the frontend is designed with a **React** framework. This project integrates **MongoDB** for data persistence and uses **JWT** for user authentication.

## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Screenshots](#screenshots)

## Features

- **User Authentication**: Register, Login, and JWT-based authentication.
- **Product Management**: View, add, and manage products (for admins).
- **Shopping Cart**: Users can add products to their cart.
- **Secure Passwords**: Uses **bcrypt** for password hashing.
- **JWT Authentication**: Secures API routes with JWT tokens.
- **MongoDB**: For persistent data storage.
- **Cross-Origin Resource Sharing (CORS)**: Enabled for frontend-backend communication.

## Technologies

- **Backend**: Node.js, Express.js, MongoDB, JWT, bcrypt, Mongoose
- **Frontend**: React, HTML, CSS, JavaScript
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Netlify for frontend, Heroku or Render for backend

## Installation

To run the project locally, follow these steps:

git clone https://github.com/cks1234/FakeShop.git
2. Install frontend dependencies
Navigate to the project root directory and install the frontend dependencies.

npm install
3. Install backend dependencies
Move to the server directory and install the backend dependencies.

cd server
npm install
4. Setup environment variables
In the root of the project, create a .env file in both the root folder and server folder with the following variables:

Frontend .env (root):

REACT_APP_API_URL=http://localhost:5000
Backend .env (inside server folder):


PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/fakeshop?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
Replace <username>, <password>, and fakeshop with your MongoDB credentials and database name.

5. Run the project
Run the frontend:

From the project root directory, run:


npm run dev
Run the backend:

Open a new terminal, navigate to the server folder, and run the backend server:


cd server
node index.js
The frontend will be available at http://localhost:3000, and the backend will run at http://localhost:5000.

