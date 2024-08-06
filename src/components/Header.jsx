import React from "react";
import "../App.css";
import { useState } from "react";
function Todoform({ todos }) {
  const [task, setTask] = useState("");
  return (
    <div className="home">
      <div className="cont">
        <h2>To-Do List</h2>
        <div className="box">
          <input type="text" placeholder="Enter task" className="inp" onChange={(e) => {
            setTask(e.target.value);
          }}/>
          <button className="add" onClick={(e) => {
           e.preventDefault()
            if (task) {
              todos.push({
                text: task,
                completed: false,
              });
              setTask("");
            }
          }}>Add Task</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input type="checkbox"/>
                {todo.text}
                <button className="delete-btn" onClick={(e)=> {
                  todos.splice(todos.indexOf(todo), 1);
                  setTask([...task]);
                }}>X</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer">
          <span className="checked">3/0</span>
          <button className="clear-btn">Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

export default Todoform;
