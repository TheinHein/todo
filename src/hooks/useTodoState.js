import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function useTodoState(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: (newTask) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTask, completed: false, update: false },
      ]);
    },
    deleteTodo: (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    completeTodo: (id) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === id
          ? {
              id: todo.id,
              task: todo.task,
              completed: !todo.completed,
              update: todo.update,
            }
          : todo
      );
      setTodos(updatedTodo);
    },
    updateTodo: (id, updatedTask) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === id
          ? {
              id: todo.id,
              task: !updatedTask ? todo.task : updatedTask,
              completed: todo.completed,
              update: !todo.update,
            }
          : todo
      );
      setTodos(updatedTodo);
    },
  };
}
