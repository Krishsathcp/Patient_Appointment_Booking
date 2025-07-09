Patient Appointment Booking System 🏥

---

📝 Project Summary

A **full-stack web-based system** that allows patients to register, log in, book medical appointments, and manage their profiles. Built using **React** for the frontend and **Node.js + Express + MongoDB** for the backend.

---

🛠️ Tech Stack

- ⚛️ **React.js** – Frontend UI
- 🌐 **Node.js + Express** – Backend API
- 🍃 **MongoDB + Mongoose** – Database and data modeling
- 🔗 **Axios** – HTTP communication
- 🎨 **CSS** – Component-level styling
- 🌍 **React Router DOM** – Frontend routing

---

📁 Project Structure

- `app/` – React frontend  
  - `src/assets/` – Contains stylesheets and images used in components:
    - `Appointment.css`, `Login.css`, `SignUp.css`, `Profile.css`, etc.
    - `images/` – Hospital-related images used in UI

- `server/` – Node.js + Express backend  
  - `server.js` – Main backend entry point  
  - `models/` – Contains Mongoose schemas:
    - `Appointment.js` – Appointment schema
    - `User.js` – User registration/login schema  
  - `.env` – Stores environment variables like MongoDB connection URI (excluded from Git)

- `start_app/` – Startup batch scripts for convenience  
  - `start_server.bat` – Starts backend server  
  - `start_app.bat` – Starts React frontend  
  - `start_all.bat` – Starts both frontend and backend together

- `README.md` – Project documentation and setup guide


---

## 📋 Prerequisites

- ✅ Node.js v18 or later
- ✅ npm (Node Package Manager)
- ✅ MongoDB Atlas account (or local MongoDB)
- ✅ Internet connection for dependency installation

---

⚙️ How to Run

🔧 Step 1: Create `.env` file inside `server/`

PORT=5000
MONGO_URI=your_mongodb_connection_string

---

🔄 Option A: Run using batch files (recommended for Windows)

1. Double-click `start_app/start_all.bat`
2. This will:
   - Start the backend server
   - Launch the React frontend
   - Open `http://localhost:3000` in your browser

---

🧪 Option B: Manual setup via terminal

📌 Start the backend:

```bash
cd server
npm install
node server.js
```
🌐 Start the frontend:
```bash
cd app
npm install
npm start
```
👨‍💻 Author
Krishsath CP

📬 Contact Me
- 🔗 [LinkedIn](https://www.linkedin.com/in/krishsath-cp-59754532a/)
- 💻 [GitHub](https://github.com/Krishsathcp)
- 📧 Email: cpkrishsath@gmail.com
