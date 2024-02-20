import { fireEvent, render, screen } from "@testing-library/react";
import AddTodo from "./AddTodo";

describe("AddTodo", () => {
  // AddTodoのプロパティが状態更新関数なので、モック関数を渡す
  // 表示しているテキストのテスト
  const mockSetTodo = jest.fn();
  it("render label element", () => {
    render(<AddTodo setTodo={mockSetTodo} />);
    const textElement = screen.getByText("Add Task :");
    expect(textElement).toBeInTheDocument();
  });
  // placefolderのテスト
  it("renders input element", () => {
    render(<AddTodo setTodo={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);
    expect(inputElement).toBeInTheDocument();
  });
  //   input要素に入力した値が表示されているか確認するためのテストを実行
  it("input element should change", () => {
    render(<AddTodo setTodo={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);
    // 入力
    fireEvent.change(inputElement, {
      target: { value: "Learn Testing Library" },
    });
    expect(inputElement).toHaveValue("Learn Testing Library");
  });
  //   追加ボタン
  it("input text should remove where add button click", () => {
    render(<AddTodo setTodo={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);
    // 入力
    fireEvent.change(inputElement, {
      target: { value: "Learn Testing Library" },
    });
    const buttonElement = screen.getByRole("button", { name: "追加" });
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveValue("");
  });
});
