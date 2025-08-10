from fastapi import APIRouter, HTTPException
from bson import ObjectId
from app.database import task_collection
from app.models import task_entity
from app.schemas import Task

router = APIRouter()

@router.post("/tasks")
def create_task(task: Task):
    new_task = task.dict()
    result = task_collection.insert_one(new_task)
    return task_entity(task_collection.find_one({"_id": result.inserted_id}))

@router.get("/tasks")
def get_tasks():
    tasks = [task_entity(t) for t in task_collection.find()]
    return tasks

@router.put("/tasks/{id}")
def update_task(id: str, task: Task):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid ID")
    task_collection.update_one({"_id": ObjectId(id)}, {"$set": task.dict()})
    return task_entity(task_collection.find_one({"_id": ObjectId(id)}))

@router.delete("/tasks/{id}")
def delete_task(id: str):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid ID")
    task_collection.delete_one({"_id": ObjectId(id)})
    return {"message": "Task deleted successfully"}
