import { React } from "react";
import TextField from "@mui/material/TextField";
import useInputState from "./hooks/useInputState";
export default function CreateTodo(props) {
  const [task, handleTask, resetTask] = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(task);
    resetTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={task}
        fullWidth
        onChange={handleTask}
        placeholder="Add ToDo item"
        style={{ marginBottom: "10px" }}
      ></TextField>
    </form>
  );
}
