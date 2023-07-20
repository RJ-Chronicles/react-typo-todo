import "./styles.css";
import ToDo from "./components/ToDo";
import { useState } from "react";
import PrintTodoItem from "./components/PrintToDoItem";

interface ToDoArray {
  id: string;
  message: string;
  status: string;
}
export default function App() {
  const [todo, setTodo] = useState<ToDoArray[]>([]);
  console.log(todo);
  const AddItemToTodoList = (message: string) => {
    const id = Math.random().toString();
    const newTodo: ToDoArray = {
      message,
      id,
      status: "incomplete"
    };

    setTodo((prev) => [...prev, newTodo]);
  };
  return (
    <div className="App">
      <ToDo title="Add ToDo Item" onClick={AddItemToTodoList} />
      <PrintTodoItem list={todo} title={"Print Element"} />
    </div>
  );
}
