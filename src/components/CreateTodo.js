import { useState } from "react";

function CreateTodo({ todoFunc }) {
  const [input, setInput] = useState("");
  function handleClick() {
    todoFunc(input);
    setInput("");
  }
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
export default CreateTodo;
