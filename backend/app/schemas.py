from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class Task(BaseModel):
    title: str
    description: Optional[str] = ""
    status: str = "Pending"
    created_at: datetime = datetime.utcnow()
