import React from "react";

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 && <p>No tasks found</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.status}
            <br />
            {task.description}
            <br />
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => onDelete(task.id)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
