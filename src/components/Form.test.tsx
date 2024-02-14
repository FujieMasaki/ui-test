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
    // 何も返さない
    const alertSpy = jest.spyOn(window, "alert").mockReturnValue();
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    await user.type(input, "test Text");
    // 上記までで、入力フォームにtest Textと入力した状態になる
    // test Textが入力された要素があるのかを検証
    expect(screen.getByDisplayValue("test Text")).toBeInTheDocument();
    const button = screen.getByRole("button");
    // クリックしたい要素を引数にする
    await user.click(button);
    // サブミットテッドに入力した文字列が追加された状態で、ウィンドウアラートが呼び出されるようにする
    expect(alertSpy).toHaveBeenCalledWith("submitted: test Text");
    // スパイをclear
    alertSpy.mockRestore();
  });
});
