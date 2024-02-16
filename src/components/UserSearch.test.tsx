import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserSearch } from "./UserSearch";
import axios from "axios";

// userインスタンスを作成
const user = userEvent.setup();

// モジュール全体をモック化する
jest.mock("axios");
// コンパイラにaxiosがモック化されていることを明示的に伝える必要がある
const mockAxios = jest.mocked(axios);

describe("userSearch", () => {
  beforeEach(() => {
    mockAxios.get.mockReset;
  });
  it("入力フィールドに入力した内容でAPIリクエストが送信される", async () => {
    // テストで使うユーザー情報を定義
    const userInfo = { id: 1, name: "Taro" };
    // APIのレスポンスを定義
    const resp = { data: userInfo };
    // APIのレスポンスを返却されるようにする
    mockAxios.get.mockResolvedValue(resp);
    // レンダリングを行う
    render(<UserSearch />);
    // 入力フォームの要素を取得
    const input = screen.getByRole("textbox");
    // 入力フォームにユーザー名を入力
    await user.type(input, userInfo.name);
    // ボタン要素を取得
    const button = screen.getByRole("button");
    // クリック
    await user.click(button);
    // 想定通りのAPIがリクエストされたか確認
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/api/users?query=${userInfo.name}`
    );
  });
  it("入力フィールドに入力した内容でAPIリクエストが送信される", async () => {
    // テストで使うユーザー情報を定義
    const userInfo = { id: 1, name: "Taro" };
    // APIのレスポンスを定義
    const resp = { data: userInfo };
    // APIのレスポンスを返却されるようにする
    mockAxios.get.mockResolvedValue(resp);
    // レンダリングを行う
    render(<UserSearch />);
    // 入力フォームの要素を取得
    const input = screen.getByRole("textbox");
    // 入力フォームにユーザー名を入力
    await user.type(input, userInfo.name);
    // ボタン要素を取得
    const button = screen.getByRole("button");
    // クリック
    await user.click(button);
    // 想定通りのAPIがリクエストされたか確認
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/api/users?query=${userInfo.name}`
    );
    // waitForを使用することでAPIのレスポンスがDOMに表示されるまで待つことができる
    await waitFor(() =>
      expect(screen.getByText(userInfo.name)).toBeInTheDocument()
    );
  });
});
