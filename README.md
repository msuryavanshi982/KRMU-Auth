Deployed Link : https://v0-mern-stack-solution-zi.vercel.app/

Problem Statement:
You are required to build a Login & Registration system using:
● Frontend: React
● Backend: Node.js with Express.js (or any backend you prefer)
● Storage: Local file-based JSON DB (or in-memory for simplicity or use database
(MongoDb) )
The system should support:
1. User Registration – Store username, password (hashed), and email.
2. User Login – Authenticate the user.
3. Backend Authorization – Generate JWT token upon login.
4. Store session/token in frontend for logged-in status.
Requirements
Frontend
● Registration form with:
○ Username
○ Email
○ Password
● Login form with:
○ Username/Email
○ Password
● Show “Welcome [username]” on successful login.
Backend
● Register route (POST /register)
○ Hash password (e.g., bcrypt)
○ Store user data in file (users.json) or in-memory object or DB
● Login route (POST /login)
○ Verify password
○ Return JWT token
● Protected route (GET /profile)
○ Must have valid JWT token in headers to access
Bonus (Optional)
● Logout (clear token in frontend)
● Form validations
● Use React for frontend
● Use a proper database (MongoDB, SQLite, etc.)
Deployment : deploy on any server and send the deployment link as well as
gitHub repo.# KRMU-Auth
