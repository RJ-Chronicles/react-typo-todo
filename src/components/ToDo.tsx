import React, { useState } from "react";
interface ToDoProps {
  title: string;
  onClick: (message: string) => void;
}
const ToDo: React.FC<ToDoProps> = ({ title, onClick }) => {
  const [message, setMessage] = useState("");

  const handleTodoInsertion = () => {
    if (message !== "") {
      onClick(message);
      setMessage("");
    }
  };
  return (
    <div>
      <h1>{title}</h1>
      <input
        type="text"
        placeholder="Add Todo Item"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleTodoInsertion}> Add Todo</button>
    </div>
  );
};

export default ToDo;
