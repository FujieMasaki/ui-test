import React, { useState, ChangeEvent, FormEvent } from "react";

// ToDoアイテムの型を定義
interface TodoItem {
  task: string;
  isCompleted: boolean;
}

// Propsの型を定義
interface AddTodoProps {
  setTodo: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const AddTodo: React.FC<AddTodoProps> = ({ setTodo: setTodos }) => {
  const [task, setTask] = useState<string>("");

  const handleNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task === "") return;
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      Add Task :
      <input value={task} placeholder="Add New Task" onChange={handleNewTask} />
      <button type="submit">追加</button>
    </form>
  );
};

export default AddTodo;
