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


1. npm install
2. cd server && npm install
3. From the project root directory, run:
npm run dev

4. cd server && node index.js

The frontend will be available at http://localhost:3000, and the backend will run at http://localhost:5000.
