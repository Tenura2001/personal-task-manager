from fastapi import FastAPI
from app.routes import router

app = FastAPI(title="Personal Task Manager API")
app.include_router(router)

@app.get("/")
def root():
    return {"message": "Task Manager API is running"}
