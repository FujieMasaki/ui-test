// 要素
// 回数

import { render, screen } from "@testing-library/react";
import Todo from "../Todo";
import userEvent from "@testing-library/user-event";

describe("Todo", () => {
  it("should render header tag title", () => {
    render(<Todo />);
    const headingElement = screen.getByRole("heading", { name: /ToDo List/i });
    expect(headingElement).toBeInTheDocument();
  });
  it("should render default three todos", () => {
    // レンダリングされると、DOM内でコンポーネントはliになる
    // 複数あるので、getAllByRoleを使用
    render(<Todo />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(3);
  });
  it("should render 4 todos where i add new task", () => {
    render(<Todo />);
    // Todo内のAddTodo(input)placeholder取得
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);
    // Todo内のAddTodo(button)要素取得
    const buttonElement = screen.getByRole("button", { name: "追加" });
    // typeで入力
    userEvent.type(inputElement, "Learn Testing Libary");
    // click
    userEvent.click(buttonElement);
    // TodoListにliが追加されるので、いくつ呼ばれているか
    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(3);
  });
});
