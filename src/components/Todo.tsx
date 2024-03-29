import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

// Todoアイテムの型を定義
interface TodoItem {
  task: string;
  isCompleted: boolean;
}

const Todo = () => {
  const initialState: TodoItem[] = [
    {
      task: "Learn vue.js",
      isCompleted: false,
    },
    {
      task: "Learn React Hook",
      isCompleted: false,
    },
    {
      task: "Learn Gatsby.js",
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState<TodoItem[]>(initialState);

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodo setTodo={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
