import { render, screen, fireEvent } from "@testing-library/react";
import Power from "./Power";

it("render Power component", () => {
  render(<Power name="電源" />);
  const nameElement = screen.getByText(/電源 off/i);
  expect(nameElement).toBeInTheDocument();
});

it("off button disable", () => {
  // render
  // offButtonElementを定義。要素を取得し、オプションのnameを使用
  // disableでないか確認
  render(<Power name="電源" />);
  const offButtonElement = screen.getByText("OFF");
  expect(offButtonElement).toBeDisabled();
});

it("off button disable", () => {
  // render
  // offButtonElementを定義。要素を取得し、オプションのnameを使用
  // disableではないか確認
  render(<Power name="電源" />);
  const onButtonElement = screen.getByText("ON");
  expect(onButtonElement).not.toBeDisabled();
});

// ボタンをON/OFF切り替えのテスト
// ONボタンへのクリックが行われ、ONボタンはdisabledになる時
it("off button disable", () => {
  render(<Power name="電源" />);
  const onButtonElement = screen.getByText("ON");
  fireEvent.click(onButtonElement);
  expect(onButtonElement).toBeDisabled();
});
