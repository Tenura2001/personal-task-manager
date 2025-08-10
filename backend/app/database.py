from pymongo import MongoClient
import os

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")  # local dev URL
client = MongoClient(MONGO_URL)
db = client["taskmanager"]  # database name
task_collection = db["tasks"]  # collection name
