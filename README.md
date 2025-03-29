
# 🚀 Secure Task Management System (TMS)

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

### ✅ Responsive Design  
- Minimalistic and user-friendly UI using CSS (no external libraries)  

---

## 📂 Project Structure

```bash
Secure-Task-Management-System/
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── taskController.js
│   │   └── adminController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── adminAuth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── taskRoutes.js
│   │   └── adminRoutes.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── TaskList.js
│   │   │   ├── TaskForm.js
│   │   │   └── AdminPanel.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Dashboard.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
└── README.md
```

---

## 💻 Installation & Setup

### Backend Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd Secure-Task-Management-System/backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file with:
   ```ini
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_REFRESH_SECRET=your_jwt_refresh_secret_key
   PORT=5000
   ```

4. **Start the Server:**
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
- CSS (No UI libraries)  

---

## 🤝 Contributing

Contributions are welcome!  
1. Fork the repository.  
2. Create a new branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add your feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a pull request.  

---

## 📝 License

This project is licensed under the MIT License.  

---

## 🙏 Acknowledgements

- Built with ❤️ using Node.js, React, and MongoDB.  
- Special thanks to all developers and contributors!  

---

**Happy Task Managing! 🎉**
```

---

