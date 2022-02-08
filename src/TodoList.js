import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import EditIcon from "@mui/icons-material/Edit";

import UpdateTodo from "./UpdateTodo";
export default function TodoList(props) {
  return (
    <List>
      <Stack spacing={0.5}>
        {props.todos.map((todo) => (
          <Paper elevation={3}>
            <ListItem
              secondaryAction={
                <>
                  <IconButton
                    aria-label="edit"
                    onClick={() => props.updateTodo(todo.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => props.deleteTodo(todo.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemIcon>
                <Checkbox
                  tabIndex={-1}
                  checked={todo.completed}
                  onClick={() => props.completeTodo(todo.id)}
                />
              </ListItemIcon>
              {todo.update ? (
                <UpdateTodo
                  task={todo.task}
                  id={todo.id}
                  updateTodo={props.updateTodo}
                />
              ) : (
                <ListItemText
                  style={{
                    textDecoration: todo.completed ? "line-through" : "",
                  }}
                >
                  {todo.task}
                </ListItemText>
              )}
            </ListItem>
          </Paper>
        ))}
      </Stack>
    </List>
  );
}
