import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

// userインスタンスを作成
const user = userEvent.setup();

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

  it("入力したテキストがサブミットされる", async () => {
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    await user.type(input, "test Text");
    // 上記までで、入力フォームにtest Textと入力した状態になる
    // test Textが入力された要素があるのかを検証
    expect(screen.getAllByDisplayValue("test Text")).toBeInTheDocument();
  });
});
