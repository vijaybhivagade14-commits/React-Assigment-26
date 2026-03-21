import { useState, useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

function App() {
  // ✅ Initialize tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const data = localStorage.getItem("tasks"); // data read
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.log("Invalid JSON in localStorage");
      }
    }
    return ;
  });

  const [filter, setFilter] = useState("all");

  // ✅ Save tasks whenever it changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //data save (tasks convert into string and save)
  }, [tasks]); // tasks change then run 

  // ➕ Add Task
  function addTask(text) {
    if (text.trim() === "") return;
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  }

  // ❌ Delete
  function deleteTask(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  // 🔁 Toggle
  function toggleTask(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  // ✏️ Edit
  function editTask(id, newText) {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: newText } : t));
  }

  // 🔍 Filter
  const filteredTasks = tasks.filter(t => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="container">
      <h2>Todo App</h2>

      <Input addTask={addTask} />

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>

      <List
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;