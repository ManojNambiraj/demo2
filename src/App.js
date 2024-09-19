import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button itemName={"All"} btnColor={"red"} />
      <Button itemName={"Movies"} btnColor={"yellow"} />
      <Button itemName={"cars"} btnColor={"blue"} />
      <Button itemName={"bikes"} btnColor={"brown"} />
      <Button itemName={"Drama"} btnColor={"orange"} />
      <Button itemName={"Mobile"} btnColor={"crimson"} />
      <Button itemName={"Cycle"} btnColor={"pink"} />
      <Button itemName={"College"} btnColor={"lavendar"} />
    </div>
  );
}

export default App;
