import { React } from "react";
import useTodoState from "./hooks/useTodoState";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
export default function ToDo() {
  const initialTodos = [
    {
      id: 1,
      task: "Clean House",
      completed: true,
      update: false,
    },
    {
      id: 2,
      task: "Take shower",
      completed: false,
      update: false,
    },
    {
      id: 3,
      task: "Walk dog",
      completed: true,
      update: false,
    },
  ];
  const { todos, addTodo, deleteTodo, completeTodo, updateTodo } =
    useTodoState(initialTodos);
  return (
    <Grid container justifyContent="center" sx={{ margin: "2rem" }}>
      <AppBar>
        <Typography>TO DO REACT HOOK</Typography>
      </AppBar>
      <Grid item sx={{ width: "40%" }}>
        <CreateTodo addTodo={addTodo} />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          updateTodo={updateTodo}
        />
      </Grid>
    </Grid>
  );
}
