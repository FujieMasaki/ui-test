import { render, screen } from "@testing-library/react";
import AsyncComponent from "./AsyncComponent";

describe("AsyncComponent", () => {
  it("ボタンをクリックすると非同期処理が実行される", async () => {
    render(<AsyncComponent />);
    expect(screen.getByText("Initial text")).toBeInTheDocument();
  });
});
