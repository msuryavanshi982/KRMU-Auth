# Login & Registration System

**Deployed Link:** [https://v0-mern-stack-solution-zi.vercel.app/](https://v0-mern-stack-solution-zi.vercel.app/)

---

## Overview

This project is a full-stack Login and Registration system built with:

* **Frontend:** React
* **Backend:** Node.js with Express.js
* **Storage:** Local file-based JSON DB (users.json) for simplicity. Can be replaced with MongoDB or other databases.

The system supports user registration, login authentication, JWT token generation, session handling, and protected routes.

---

## Features

1. **User Registration**
   Users can register by providing a username, email, and password (hashed using bcrypt).

   ![Registration Form](/mnt/data/6f79d030-2a5d-4aec-9335-27e27bffa107.png) ![image](https://github.com/user-attachments/assets/f40e83f5-2e2e-4048-a955-93319c99e68c)


2. **User Login**
   Users can log in using their email and password. On successful login, a JWT token is generated and stored on the frontend for session management.

   ![Login Form](/mnt/data/0d79fec8-2ca2-4c5d-b282-55521e6e8dee.png) ![image](https://github.com/user-attachments/assets/80e98d9d-a756-4749-b2a5-3583f4731bad)


3. **Protected Profile Route**
   Once logged in, users can access a protected profile page that displays a welcome message with their username and email.

   ![Profile Page](/mnt/data/cca22629-df51-4791-94d3-9f853d0fc812.png) ![image](https://github.com/user-attachments/assets/2d89e9c7-e91b-4c5c-ad39-5aabdae54d9c)


4. **Logout**
   Users can log out which clears the stored JWT token on the frontend.

---

## Usage

* To register, navigate to the **Register** tab and fill in the username, email, password, and confirm password fields.
* To log in, go to the **Login** tab and enter your email and password.
* Upon successful login, you will be redirected to your profile page.
* You can logout using the logout button.

---

## Demo Credentials

Use the following credentials to test the system:

* **Email:** [demo@gmail.com](mailto:demo@gmail.com)
* **Password:** demo123

---

## Backend Routes

* `POST /register` — Register a new user with hashed password
* `POST /login` — Authenticate user and return JWT token
* `GET /profile` — Protected route, requires valid JWT token

---

## Technologies Used

* React (Frontend)
* Node.js & Express.js (Backend)
* JSON file storage or MongoDB (optional)
* JWT for authentication
* bcrypt for password hashing



