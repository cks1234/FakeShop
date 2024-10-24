markdown
Copy code
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

### 1. Clone the repository

```bash
git clone https://github.com/cks1234/FakeShop.git
2. Install frontend dependencies
Navigate to the project root directory and install the frontend dependencies.

bash
Copy code
npm install
3. Install backend dependencies
Move to the server directory and install the backend dependencies.

bash
Copy code
cd server
npm install
4. Setup environment variables
In the root of the project, create a .env file in both the root folder and server folder with the following variables:

Frontend .env (root):

arduino
Copy code
REACT_APP_API_URL=http://localhost:5000
Backend .env (inside server folder):

bash
Copy code
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/fakeshop?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
Replace <username>, <password>, and fakeshop with your MongoDB credentials and database name.

5. Run the project
Run the frontend:

From the project root directory, run:

bash
Copy code
npm run dev
Run the backend:

Open a new terminal, navigate to the server folder, and run the backend server:

bash
Copy code
cd server
node index.js
The frontend will be available at http://localhost:3000, and the backend will run at http://localhost:5000.

Environment Variables
For both frontend and backend, environment variables are required:

Backend .env:
bash
Copy code
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/fakeshop?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
MONGODB_URI: Your MongoDB connection string.
JWT_SECRET: The secret key used to sign JWT tokens.
Frontend .env:
bash
Copy code
REACT_APP_API_URL=http://localhost:5000
REACT_APP_API_URL: The URL where the backend API is running.
Usage
Registration and Login:

Users can register by providing a username, email, and password.
Registered users can log in using their credentials, and a JWT token will be generated to authenticate further requests.
Product Management:

Admin users can add, edit, and delete products.
Cart Management:

Users can add products to their cart and manage the items.
API Endpoints
Auth Endpoints:
POST /api/users/register: Register a new user.
POST /api/users/login: Log in an existing user.
Product Endpoints:
GET /api/products: Get all products.
POST /api/products: Create a new product (Admin only).
Cart Endpoints:
GET /api/cart: Get the current user's cart.
POST /api/cart: Add a product to the cart.
Screenshots
Screenshots and GIFs of the running application can be added here to showcase how the application looks and functions.

License
This project is licensed under the MIT License. See the LICENSE file for details.

csharp
Copy code

Save this content as `README.md` in your project folder. &#8203;:contentReference[oaicite:0]
