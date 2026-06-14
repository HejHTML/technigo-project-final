# 🧠 CyberWise Quiz – Final Project

This is a fullstack mono-repo project built as a final assignment.  
It includes both a **frontend (React)** and a **backend (Node.js + Express + MongoDB)**.

---

# 🚀 Live links

- 🌐 Frontend (Netlify): https://cyberwisetest.netlify.app
- ⚙️ Backend (Render): https://technigo-project-final-8cry.onrender.com

---

# 📌 Project description

CyberWise Quiz is an interactive cybersecurity quiz application where users can test their knowledge of topics such as:

- GDPR  
- NIS2  
- DORA  
- General cybersecurity basics  

The application includes:

- Multiple choice quiz system
- Real-time score tracking
- Immediate feedback (correct / wrong answers)
- Progress bar
- Animated transitions between questions
- Leaderboard stored in MongoDB Atlas

---

# 🧠 How I approached the project

The goal was to build a fullstack application with a clear separation between frontend and backend.

### Frontend
- Built with React
- React Router for navigation
- Context API for global state (score management)
- Custom CSS with mobile-first responsive design
- UI animations for better user experience

### Backend
- Node.js + Express API
- MongoDB Atlas database
- Mongoose for schema modeling
- REST API for saving and retrieving scores

### Planning
The project was built step-by-step:
1. Backend API + database setup
2. Frontend quiz logic
3. State management (score, questions)
4. UI styling and responsiveness
5. Animations and UX improvements
6. Deployment (Render + Netlify)

---

# 📱 Responsiveness

The application is fully responsive and works on:

- Mobile (320px+)
- Tablet
- Desktop (up to 1600px)

---

# 🧪 If I had more time

If I continued developing the project, I would:

- Add user authentication
- Add difficulty levels (easy / medium / hard)
- Improve animations
- Improve CSS and try to reduce "important"-rules.
- Add category selection (GDPR, NIS2, DORA separately)

---

# 🛠 Tech stack

## Frontend
- React
- React Router
- Context API
- CSS (mobile-first)

## Backend
- Node.js
- Express
- MongoDB Atlas
- Mongoose

---

# Getting started (local development)

## 1. Clone the repository

## Getting started (local development)

### 1. Clone the repository
```bash
git clone https://github.com/HejHTML/technigo-project-final.git
cd technigo-project-final
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the frontend
```bash
npm run dev
```

## Backend setup (server)

```bash
cd server
npm install
npm run dev
```

## 🌍 Environment variables

Create a `.env` file inside the `server` folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Run full project

Frontend: http://localhost:5173  
Backend: http://localhost:5000  ( or other free port)

Make sure both servers are running at the same time.