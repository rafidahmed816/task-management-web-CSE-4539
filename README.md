
# 🚀 Task Management System

A robust task management application for users and admins with secure authentication, role-based access control, and comprehensive CRUD functionalities.  

---

## 🟢 Overview

Secure Task Management System (TMS) is designed to simplify task handling, offering seamless task management with features like sorting, filtering, and role-based access.  

---

## ✨ Features

### ✅ User Authentication & Authorization
- JWT-based authentication with access and refresh tokens  
- Role-based access control:  
  - **Users:** Manage personal tasks  
  - **Admins:** View all users and their tasks  

### ✅ Task Management  
- Create, view, edit, and delete tasks  
- Sorting and filtering by priority, due date, and search keywords  
- Inline editing and task completion options  


---

## 📂 Project Structure

```bash
task-management-web-CSE-4539/
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── adminController.js
│   │   ├── taskController.js
│   │   └── userController.js
│   ├── .env
│   ├── middleware
│   │   ├── adminAuth.js
│   │   └── userAuth.js
│   ├── models
│   │   ├── Task.js
│   │   └── User.js
│   ├── package.json
│   ├── package-lock.json
│   ├── routes
│   │   ├── adminRoutes.js
│   │   ├── taskRoutes.js
│   │   └── userRoutes.js
│   ├── server.js
│   └── utils
├── frontend
│   ├── Daco_1960469.png
│   ├── eslint.config.js
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   └── vite.svg
│   ├── README.md
│   ├── src
│   │   ├── api.jsx
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── AdminPanel.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Home.jsx
│   │   └── styles.css
│   └── vite.config.js
├── .gitignore
└── README.md
```

---

## 💻 Installation & Setup

### Backend Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rafidahmed816/task-management-web-CSE-4539.git
   cd task-management-web-CSE-4539/backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Server:**
   ```bash
   npm start
   ```
   Server runs at: [http://localhost:5000](http://localhost:5000)  

---

### Frontend Setup

1. **Navigate to Frontend Directory:**
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the React App:**
   ```bash
   npm start
   ```
   App runs at: [http://localhost:3000](http://localhost:3000)  

---

## 🟢 Usage

1. **Register & Login:**  
   - Register a new account or log in.  
   - JWT authentication ensures secure access.  

2. **User Dashboard:**  
   - View, create, edit, delete, sort, and filter tasks.  

3. **Admin Panel:**  
   - View all users and their tasks.  
   - Admin access is restricted based on role.  

4. **Token Expiry Handling:**  
   - If the token expires, users are prompted to re-login.  

---

## 🛠️ Technologies Used

### 🟢 Backend
- Node.js  
- Express.js  
- MongoDB & Mongoose  
- JWT for authentication  
- Bcrypt for password hashing  

### 🟢 Frontend
- React  
- React Router  
- Axios  
- CSS 

---



