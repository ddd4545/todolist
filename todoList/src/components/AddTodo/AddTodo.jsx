import React, { useState } from "react";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const hadleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); //새로고침을 막는다.
    if (text.trim().length === 0) {
      return;
    }
    // onAdd({ id: 456, text:text, status: "active" });
    onAdd({ id: 456, text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={hadleChange}
      />
    </form>
  );
}

export default AddTodo;
