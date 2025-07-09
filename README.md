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

Patient_Appointment_Booking/
│
├── app/ # React frontend
│ └── src/assets/ # CSS and images
├── server/ # Node + Express backend
│ ├── models/ # Mongoose models
│ │ ├── Appointment.js
│ │ └── User.js
│ ├── .env # Environment variables (not tracked)
│ └── server.js # Main backend server
├── start_app/ # Batch scripts for automation
│ ├── start_app.bat
│ ├── start_server.bat
│ └── start_all.bat
└── README.md



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
🔗 LinkedIn

💻 GitHub

📧 Email: cpkrishsath@gmail.com

yaml
Copy
Edit

