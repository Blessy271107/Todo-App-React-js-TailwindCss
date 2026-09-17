import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (task.trim() !== "") {
      setList([...list, { id: Date.now(), text: task , completed: false }]);
      setTask("");
    }
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

    const checkbox = (id) => {

      setList(list.map((y) => y.id === id ? {...y ,  completed: !y.completed} : y))
      
    
  }

  console.log(list);
  

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List 📋</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add your task"
          className="flex-1 border px-3 py-2 rounded-lg"
        />
        <button
          onClick={addItem}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-400"
        >
          ADD
        </button>
      </div>

      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b py-2"
          >
            <input type="checkbox" checked={item.completed} onChange={() => checkbox(item.id)}  />
            <span className={item.completed ? "text-red-700 line-through bg-gray-400" :  "text-black"} >{item.text}</span>
            <button
              onClick={() => deleteItem(item.id)}
              className="text-red-500 hover:text-red-700"
            >
            <checkbox className="bg-purple=500"></checkbox>
              <RiDeleteBin5Line />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
3