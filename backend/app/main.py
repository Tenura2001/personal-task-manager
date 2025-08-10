from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router

app = FastAPI(title="Personal Task Manager API")

# Allow CORS for frontend
origins = [
    "http://localhost:3000",   # React dev server
    # Add more origins if needed, e.g. your deployed frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # Allowed origins
    allow_credentials=True,
    allow_methods=["*"],        # Allow all HTTP methods
    allow_headers=["*"],        # Allow all headers
)

app.include_router(router)

@app.get("/")
def root():
    return {"message": "Task Manager API is running"}
