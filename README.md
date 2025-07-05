
# PayTM Clone – Backend Only

This is the backend of a basic PayTM clone, built using **Node.js**, **Express.js**, and **MongoDB** (via MongoDB Compass or MongoDB Atlas). It provides API endpoints for user authentication, balance handling, and money transfers.

---

## ✅ Features

- User authentication (Signup & Signin)
- Ability to send money between users
- User dashboard with balance info

---

## ✅ Prerequisites

Before you start, ensure the following are installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **MongoDB** (local installation or cloud via MongoDB Atlas)

---

## 🚀 Installation

Follow these steps to set up and run the backend server:

### 1. Clone the Repository

```bash
git clone https://github.com/RaynishaJain/paytm.git
```

### 2. Set Up Backend

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory and add the following:

```
MONGO_URI=mongodb://localhost:27017/your-database-name
PORT=5000
```

Replace `your-database-name` with your MongoDB database name.

### 4. Start the Backend Server

```bash
npm start
```

This will start the **Express.js server** on `http://localhost:3000`.
