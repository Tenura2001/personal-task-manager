import React, { useState, useEffect } from "react";

function TaskForm({ onSave, editingTask, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
    } else {
      setTitle("");
      setDescription("");
      setStatus("Pending");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");
    if (title.length > 50) return alert("Title should be less than 50 characters");
    onSave({ title, description, status });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>

      <div>
        <label>Title:</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Description:</label>
        <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label>Status:</label>
        <br />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>

      <button type="submit">{editingTask ? "Update" : "Add"}</button>
      {editingTask && (
        <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default TaskForm;
