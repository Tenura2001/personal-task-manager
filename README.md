# personal-task-manager
A FARM stack personal task manager app

# Personal Task Manager - Backend

## 📌 Backend Overview

This is a **FastAPI-based backend** for the **Personal Task Manager** application.  
It provides REST API endpoints to manage tasks stored in **MongoDB**.  
CORS is configured to allow communication with the React frontend.

### ⚙️ Main Features
- Built with **FastAPI** for fast, async APIs
- Uses **MongoDB** as the database
- CORS Middleware to enable frontend-backend interaction
- Organized code structure with routes, models, schemas, and database connection

### 📂 Project Structure
backend/
│── app/
│ ├── main.py # API entry point
│ ├── models.py # MongoDB models
│ ├── routes.py # API endpoints
│ ├── database.py # MongoDB connection setup
│ ├── schemas.py # Pydantic schemas for validation
│ └── init.py
│── requirements.txt # Python dependencies


### 🚀 How to Run
```bash
# 1️⃣ Install dependencies
pip install -r requirements.txt

# 2️⃣ Start backend server with hot reload
uvicorn app.main:app --reload

# 3️⃣ Access API at
http://127.0.0.1:8000
