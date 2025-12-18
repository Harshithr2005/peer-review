# 📘 Peer Review System

A full-stack web application designed to streamline the **academic peer review process** in colleges.
The platform enables  **teachers to create classrooms** ,  **students to submit projects** , and **teachers to evaluate projects** with structured feedback and marks.

---

## 🚀 Features

### 👩‍🏫 Teacher

* Secure authentication
* Create and manage classrooms
* Generate unique room codes
* View participants and submitted projects
* Evaluate student projects (marks + feedback)
* Close classrooms to stop submissions
* Export evaluation data as CSV

### 🧑‍🎓 Student

* Secure authentication
* Join classrooms using room code
* Submit project details
* View feedback and marks
* Automatic redirection when classroom is closed

### 🔐 General

* Role-based access control (Teacher / Student)
* JWT authentication with cookies
* Real-time UI updates using polling
* Clean glassmorphism UI
* Responsive design

### 🧠 System Architecture

```
            Frontend (React + Tailwind)         `

            ↓ Backend (Node.js + Express)`

            ↓ Database (MongoDB)`
```

* Frontend handles UI and user interaction
* Backend handles authentication, business logic, and CSV export
* MongoDB stores users, rooms, projects, and reviews

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt

## 🔐 Authentication Flow

* JWT token generated on login
* Token stored in **HTTP cookies**
* Middleware validates user on every protected route
* Role-based authorization ensures correct access

## 🔄 Real-Time Updates Strategy

The system uses **polling** to synchronize data across users.

* Client fetches updated room/project data every few seconds
* Ensures all users see latest submissions and reviews
* Stable and suitable for academic environments
* Avoids complexity of WebSockets

---

## 📊 CSV Export Feature

* Teachers can download evaluation data in CSV format
* CSV is generated dynamically on backend
* Includes student details, project title, marks, and feedback
* File opens directly in Excel / Google Sheets

---

## 🧪 Testing Note (Important)

> Cookies are shared across browser tabs.

To test  **Teacher and Student simultaneously** , use:

* Different browsers (Chrome & Brave), or
* Incognito window

This ensures correct session isolation.

---

## ▶️ How to Run the Project

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/peer-review-system.git
```

### 2️⃣ Backend setup

```
cd backend
npm install
npm start
```

Create a .env file:

```
MONGO_URI=mongodb://localhost:27017/peer-review
JWT_KEY=your_secret_key
```

### 3️⃣ Frontend setup

```
cd frontend
npm install
npm run dev
```

### 🎓 Academic Relevance

This project demonstrates:

* Full-stack development
* Secure authentication
* Role-based access control
* Database design
* REST API design
* UI/UX principles
* Real-world problem solving

### 👨‍💻 Author

Developed as an academic project to improve transparency and efficiency in project evaluation systems.
