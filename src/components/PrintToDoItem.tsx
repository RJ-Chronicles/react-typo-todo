import React from "react";
interface ToDoArray {
  id: string;
  message: string;
  status: string;
}

interface PrintToDoProps {
  list: ToDoArray[];
  title: string;
}
const PrintToDoItem: React.FC<PrintToDoProps> = ({ list, title }) => {
  console.log("+ from the print");
  console.log(list);
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {list.map((item, index) => (
          <div
            key={index}
            style={{ border: "1px solid black", margin: "10px 20%" }}
          >
            <h3>{item.message}</h3>
            <p>{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintToDoItem;
