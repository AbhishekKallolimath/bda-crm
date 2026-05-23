# 🏭 BDA CRM System for Manufacturing Company

A modern, full-stack Customer Relationship Management (CRM) platform built using the **MERN Stack** (MongoDB, Express.js, React.js, and Node.js).  
This application is designed to streamline lead management, sales tracking, and Business Development Associate (BDA) performance monitoring within a manufacturing environment.

The system provides secure role-based authentication, real-time lead tracking, and an intuitive dashboard for both administrators and BDAs.

---

# 🚀 Live Demo

> Update the URLs after deployment

- **Frontend Application:** https://your-frontend.vercel.app
- **Backend API:** https://your-backend.onrender.com

---

# 📌 Table of Contents

- Overview
- Features
- Technology Stack
- System Architecture
- Installation & Setup
- Environment Variables
- API Documentation
- Usage Guide
- Deployment
- Folder Structure
- Future Enhancements
- Troubleshooting
- Author
- License

---

# 📖 Overview

The **BDA CRM System** helps organizations efficiently manage customer leads and monitor sales activities.  

The platform enables:
- Administrators to manage leads and users
- BDAs to update lead progress
- Teams to track sales performance
- Organizations to maintain centralized customer data

The application follows a secure client-server architecture with JWT authentication and role-based authorization.

---

# ✨ Features

## 🔹 Admin Features

- Create, update, assign, and delete leads
- Manage BDA user accounts
- Access organization-wide dashboards
- Monitor lead conversion statistics
- Track overall sales performance

## 🔹 BDA Features

- Access assigned leads only
- Update lead statuses
- Add customer interaction notes
- Track personal sales pipeline
- Monitor individual performance

## 🔹 Authentication & Security

- JWT-based authentication
- Password hashing using bcryptjs
- Protected API routes
- Role-based access control
- Secure token validation

## 🔹 General Features

- Responsive user interface
- RESTful API architecture
- Real-time dashboard statistics
- Clean and modular code structure

---

# 🧰 Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, React Router DOM, Axios, Context API |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Authentication | JWT, bcryptjs |
| Deployment | Vercel, Render |
| Version Control | Git & GitHub |

---

# 🧱 System Architecture

```text
┌────────────────────┐
│   React Frontend   │
└─────────┬──────────┘
          │ HTTP Requests
          ▼
┌────────────────────┐
│  Express Backend   │
│  REST API Server   │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│   MongoDB Atlas    │
│   Cloud Database   │
└────────────────────┘
```

### Authentication Flow

```text
User Login
    ↓
JWT Token Generated
    ↓
Token Stored in Frontend
    ↓
Protected API Access
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/AbhishekKallolimath/bda-crm.git
cd bda-crm
```

---

# 🔧 Backend Setup

## Navigate to Backend Directory

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Start Backend Server

```bash
npm run dev
```

Backend server runs on:

```text
http://localhost:5000
```

---

# 🎨 Frontend Setup

## Open a New Terminal

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Start React Application

```bash
npm start
```

Frontend application runs on:

```text
http://localhost:3000
```

---

# 🔐 Environment Variables

## Backend (.env)

| Variable | Description |
|---|---|
| PORT | Express server port |
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | Secret key used for JWT signing |

> ⚠️ Never commit your `.env` file to GitHub.

---

# 📡 API Documentation

## Authentication Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate user |
| GET | `/api/auth/me` | Get current user |

---

## Lead Management Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/leads` | Retrieve leads |
| POST | `/api/leads` | Create lead |
| PUT | `/api/leads/:id` | Update lead |
| DELETE | `/api/leads/:id` | Delete lead |
| GET | `/api/leads/stats` | Dashboard statistics |

---

# 📖 Usage Guide

## Admin Workflow

1. Register/Login as Admin
2. Create BDA accounts
3. Add customer leads
4. Assign leads to BDAs
5. Track overall performance

## BDA Workflow

1. Login using assigned credentials
2. View assigned leads
3. Update lead statuses
4. Add interaction notes
5. Monitor personal statistics

---

# ☁️ Deployment

## Backend Deployment – Render

1. Push repository to GitHub
2. Create Web Service on Render
3. Connect GitHub repository
4. Configure environment variables
5. Deploy application

---

## Frontend Deployment – Vercel

1. Import repository into Vercel
2. Set root directory to `frontend`
3. Configure API URL environment variable
4. Deploy application

---

# 📁 Folder Structure

```text
bda-crm/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

# 📸 Screenshots

## Login Page
_Add application screenshot here_

## Admin Dashboard
_Add application screenshot here_

## Lead Management
_Add application screenshot here_

---

# 🔮 Future Enhancements

- Advanced filtering and search
- Email notifications
- Activity logging
- File attachment support
- Analytics dashboard with charts
- Export data to CSV/Excel
- Dark mode support
- Password reset functionality

---

# 🛠 Troubleshooting

## MongoDB Connection Issues

- Verify MongoDB Atlas whitelist settings
- Check connection string correctness
- Ensure internet connectivity

## JWT Authentication Errors

- Verify JWT secret configuration
- Ensure token is sent in request headers

## CORS Errors

Ensure backend includes:

```javascript
app.use(cors());
```

---

# 👨‍💻 Author

## Abhishek Kallolimath

- GitHub: https://github.com/AbhishekKallolimath

Project developed for the  
**Isaii AI MERN Stack Developer Internship – Technical Assessment**

---

# 📄 License

This project is intended for educational and assessment purposes only.  
Commercial usage requires explicit permission from the author.

---

# ❤️ Acknowledgements

- MongoDB Atlas
- React.js Community
- Node.js Community
- Render
- Vercel

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.
```
