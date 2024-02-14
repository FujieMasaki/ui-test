// レンダリング結果にボタンタグが存在するかtest
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("ボタンタグがレンダリングされている", () => {
    render(<Button label="ボタン" onClick={() => alert("押されました")} />);
    const element = screen.getByRole("button");
    // 要素が存在するかどうか
    expect(element).toBeInTheDocument();
    // 引数に指定した文字列がDOMの中に存在するかを検証する
    expect(element).toHaveTextContent("ボタン");
  });
});
