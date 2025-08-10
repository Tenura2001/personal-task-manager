# personal-task-manager
A FARM stack personal task manager app


## Backend API Development - Day 01 Progress

On Day 2 of the project, the backend API was developed using **FastAPI** with a **MongoDB** database. This backend serves as the foundation for managing tasks in the Personal Task Manager application. The development followed industry best practices including clear folder structure, data validation, and API documentation.

### Key Features Implemented

- **Project Structure:**
  - `app/main.py` – Entry point of the FastAPI application.
  - `app/database.py` – Establishes MongoDB connection.
  - `app/models.py` – Defines the MongoDB data model and entity serializer.
  - `app/schemas.py` – Uses Pydantic models for request data validation.
  - `app/routes.py` – Contains RESTful API endpoints for task management.
  - `requirements.txt` – Lists all Python dependencies for the backend.

- **MongoDB Integration:**
  - Connected to a MongoDB instance (local or Atlas cloud).
  - Used the `pymongo` library to interact with the database.
  - Tasks are stored in a `tasks` collection with fields: title, description, status, and created_at timestamp.

- **CRUD API Endpoints:**
  - **Create Task:** `POST /tasks` – Add a new task.
  - **Read Tasks:** `GET /tasks` – Retrieve all tasks.
  - **Update Task:** `PUT /tasks/{id}` – Modify an existing task by its ID.
  - **Delete Task:** `DELETE /tasks/{id}` – Remove a task by its ID.

- **Validation & Error Handling:**
  - Used Pydantic schemas to validate incoming task data.
  - Basic error handling for invalid task IDs during update/delete.

- **Development & Testing:**
  - Backend server runs locally with auto-reload (`uvicorn`).
  - API tested using **Postman** and FastAPI’s built-in Swagger UI (`/docs`).
  - All API routes return JSON responses for easy frontend consumption.

### How to Run the Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
3. Make sure MongoDB is running locally or update your connection string in app/database.py to use MongoDB Atlas.
4. Start the FastAPI server:
   ```bash
   uvicorn app.main:app --reload
5. Open your browser and navigate to: <br/>
   API docs: http://127.0.0.1:8000/docs   <br/>
   Root endpoint: http://127.0.0.1:8000/
