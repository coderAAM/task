# Task Manager

A full-stack **Task Manager application** built with **React (Vite) frontend** and **Node.js + Express backend**.  
This project allows users to **register, login, create tasks, update, delete, and view tasks**.  

---

## Project Structure

task/
├── frontend/ # React frontend (Vite + Tailwind CSS)
└── backend/ # Node.js + Express backend (APIs + MongoDB)


---

## Backend

The backend is built with **Node.js, Express, and MongoDB**.  
All APIs are under the `/api` route:

### Auth Routes

| Method | Endpoint         | Description            |
|--------|----------------|------------------------|
| POST   | /api/auth/register | Register a new user    |
| POST   | /api/auth/login    | Login user            |

Example:

```js
router.post("/register", authRouter.userRegister)
router.post("/login", authRouter.userLogin)

Frontend

The frontend is built with React + Vite + Tailwind CSS.

Features

Register & Login Users

Dashboard to list all tasks

Create, Update, Delete tasks

Protected Routes (only logged-in users can access)

git clone https://github.com/YOUR_USERNAME/task.git
cd task

2. Backend Setup
cd backend
npm install


Create a .env file in backend/:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start the server:
npm run dev

Server will run on http://localhost:3000.

3. Frontend Setup
cd ../frontend
npm install


Start the frontend:

npm run dev


Frontend will run on http://localhost:5173.

Make sure backend is running first for API calls to work.

Usage

Open frontend in browser (http://localhost:5173)

Register a new user or login

Access Dashboard to view tasks

Create new tasks

Edit or delete tasks

API Integration

The frontend communicates with backend using Axios:

import API from './api/axios';

const fetchTasks = async () => {
  const res = await API.get('/task/get-task');
  console.log(res.data);
};


All protected routes use JWT stored in backend, handled via authentication middleware.

Tech Stack

Frontend: React, Vite, Tailwind CSS, Axios, React Router

Backend: Node.js, Express, MongoDB, JWT

Others: Git, GitHub, Postman (for API testing)

Author

Muhammad Ali Mughal
GitHub
 | LinkedIn

Notes

Make sure .env variables are set correctly

Backend must run on http://localhost:3000

Frontend will fetch APIs from /api endpoints

All sensitive files like .env are ignored in .gitignore


---
