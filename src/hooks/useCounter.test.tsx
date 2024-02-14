import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  it("increment", () => {
    const { result } = renderHook(() => useCounter(1));
    // オブジェクトを使って現在の値を確認する
    expect(result.current.count).toBe(1);
    // stateの更新を確認
    act(() => result.current.increment());
    expect(result.current.count).toBe(2);
  });

  it("decrement", () => {
    const { result } = renderHook(() => useCounter(1));
    expect(result.current.count).toBe(1);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(0);
  });
});
