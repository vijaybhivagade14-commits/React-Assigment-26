import { useState } from "react";

function Input({ addTask }) {
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim() === "") {
      alert("Task cannot be empty");
      return;
    }

    addTask(input);
    setInput("");
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Input;