import React from "react";
import useInputState from "./hooks/useInputState";
export default function UpdateTodo(props) {
  const [input, handleInput] = useInputState(props.task);
  const updateTodo = (e) => {
    e.preventDefault();
    props.updateTodo(props.id, input);
  };
  return (
    <form onSubmit={updateTodo} style={{ width: "75%" }}>
      <input
        value={input}
        onChange={handleInput}
        autoFocus
        style={{
          border: "none",
          outline: "none",
          fontSize: "1rem",
          backgroundColor: "rgba(0,0,0,0.1)",
          height: "40px",
          width: "100%",
          marginLeft: "-10px",
          paddingLeft: "10px",
          borderRadius: "5px",
        }}
      />
    </form>
  );
}
