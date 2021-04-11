import React, { useState } from "react";
import "../App.css";

export default function Todo({ title, deleteTodo, id, isChecked, checked }) {
  const [check, setCheck] = useState(isChecked);

  return (
    <div key={id} id={id} className="todo">
      <input
        onClick={() => {
          checked(id, check);
          setCheck(!check);
        }}
        type="checkbox"
      />
      <h2 style={{ textDecoration: check ? "line-through" : "none" }}>
        {" "}
        {title}{" "}
      </h2>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
