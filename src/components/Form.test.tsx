import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("初期状態ではテキストは空", () => {
    render(<Form />);
    // プレイスホルダーを取得
    const input = screen.getByPlaceholderText("Enter text");
    // 要素がレンダリングされているか
    expect(input).toBeInTheDocument();
    // 初期状態は空
    expect(input).toHaveTextContent("");
  });
});
