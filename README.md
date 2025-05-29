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

  ![image](https://github.com/user-attachments/assets/2840beaa-4152-438b-9453-e60169a9552a)


2. **User Login**
   Users can log in using their email and password. On successful login, a JWT token is generated and stored on the frontend for session management.

  ![image](https://github.com/user-attachments/assets/134a5e19-f585-46dd-9385-eaadc3965fa7)


3. **Protected Profile Route**
   Once logged in, users can access a protected profile page that displays a welcome message with their username and email.

![image](https://github.com/user-attachments/assets/55e02585-1997-4da1-9349-b05355f7db8a)


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



