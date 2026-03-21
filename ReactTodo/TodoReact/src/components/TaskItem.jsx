import { useState } from "react";



function TaskItem({ task, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  if (!task) return null;

  function handleSave() {
    if (newText.trim() === "") return;

    editTask(task.id, newText); // ✅ correct call
    setIsEditing(false);
  }

  return (
    <div className="task">
      {/* Toggle */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {/* Edit Mode */}
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
       <span className={task.completed ? "completed" : ""}>
  {task.text}
</span>
      )}

      {/* Buttons */}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;