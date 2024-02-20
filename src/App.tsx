import Power from "./components/Power";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      {/* <Button label="ボタン" onClick={() => alert("押されました")} /> */}
      {/* <Form /> */}
      {/* <AsyncComponent /> */}
      <Power name="電源" />
      <Todo />
    </>
  );
}

export default App;
