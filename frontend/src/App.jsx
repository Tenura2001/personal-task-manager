import React, { useEffect, useState } from "react";
import api from "./api";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    setLoading(true);
    setError("");
    try {
      await api.post("/tasks", task);
      fetchTasks();
    } catch (err) {
      setError("Failed to add task");
      setLoading(false);
    }
  };

  const updateTask = async (task) => {
    setLoading(true);
    setError("");
    try {
      await api.put(`/tasks/${editingTask.id}`, task);
      setEditingTask(null);
      fetchTasks();
    } catch (err) {
      setError("Failed to update task");
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    setLoading(true);
    setError("");
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      setError("Failed to delete task");
      setLoading(false);
    }
  };

  const handleSave = (task) => {
    if (editingTask) updateTask(task);
    else addTask(task);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Personal Task Manager</h1>

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "15px", padding: "8px", width: "100%" }}
      />

      {loading && <p>Loading tasks...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <TaskForm
        onSave={handleSave}
        editingTask={editingTask}
        onCancel={() => setEditingTask(null)}
      />

      <TaskList tasks={filteredTasks} onDelete={deleteTask} onEdit={setEditingTask} />
    </div>
  );
}

export default App;
