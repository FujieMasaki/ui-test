// レンダリング結果にボタンタグが存在するかtest
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("ボタンタグがレンダリングされている", () => {
    render(<Button label="ボタン" onClick={() => alert("押されました")} />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("ボタン");
  });
});
