import React from "react";

// Todoアイテムの型を定義
interface TodoItem {
  task: string;
  isCompleted: boolean;
}

// Propsの型を定義
interface TodoListProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const handleRemoveTask = (index: number): void => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleUpdateTask = (index: number): void => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        // スプレッド演算子を使用して新しいオブジェクトを作成し、isCompletedを更新
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          style={{
            textDecoration: todo.isCompleted ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleUpdateTask(index)}
          />
          {todo.task}
          <span
            onClick={() => handleRemoveTask(index)}
            style={{ cursor: "pointer" }}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
