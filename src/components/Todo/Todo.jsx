import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Todo({ todo, onUpdate, onDelete }) {
  // console.log(props);s
  console.log(todo); //{id,text,status}
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li className="todo">
      <input
        className="ckeckbox"
        type="checkbox"
        id={id}
        Checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id} className="text">
        {text}
      </label>
      <span className="icon">
        <button className="button" onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}

export default Todo;
