from datetime import datetime

def task_entity(task) -> dict:
    return {
        "id": str(task["_id"]),
        "title": task["title"],
        "description": task["description"],
        "status": task["status"],
        "created_at": task["created_at"]
    }
