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
# Task Manager

A full-stack **Task Manager application** built with **React (Vite) frontend** and **Node.js + Express backend**.  
This project allows users to **register, login, create, update, delete, and view tasks**.  

---

## Backend

The backend is built with **Node.js + Express + MongoDB**.  

### Auth Routes

| Method | Endpoint         | Description            |
|--------|-----------------|------------------------|
| POST   | /api/auth/register | Register a new user    |
| POST   | /api/auth/login    | Login user            |

Example:

```js
router.post("/register", authRouter.userRegister)
router.post("/login", authRouter.userLogin)

Task Routes
Method	Endpoint	Description
POST	/api/task/create-task	Create a new task
GET	/api/task/get-task	Get all tasks
PUT	/api/task/update-task/:id	Update a task by ID
DELETE	/api/task/delete-task/:id	Delete a task by ID

router.post('/create-task',taskController.createTask)
router.get('/get-task', taskController.getTask)
router.put('/update-task/:id', taskController.putTask)
router.delete('/delete-task/:id', taskController.deleteTask)

Frontend

The frontend is built with React + Vite + Tailwind CSS.

Features

Register & Login Users

Dashboard to list all tasks

Create, Update, Delete tasks

Protected Routes (only logged-in users can access)

Installation
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/task.git
cd task

cd backend
npm install

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

npm run dev

3. Frontend Setup
cd ../frontend
npm install

npm run dev

npm run dev
API Integration

The frontend communicates with backend using Axios:
import API from './api/axios';

const fetchTasks = async () => {
  const res = await API.get('/task/get-task');
  console.log(res.data);
};




