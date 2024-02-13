import Button from "./components/Button";

function App() {
  return (
    <>
      <Button label="ボタン" onClick={() => alert("押されました")} />
    </>
  );
}

export default App;
