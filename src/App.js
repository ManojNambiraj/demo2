import "./App.css";
import Button from "./Button";

function App() {
  const handleClick = (data) => {
    alert(data);
  };

  return (
    <div className="App">

      <Button handleClick={handleClick} btnName={"All"} value={50} />
      <Button handleClick={handleClick} btnName={"Movies"} value={100} />
      <Button handleClick={handleClick} btnName={"Cars"} value={2} />
      <Button handleClick={handleClick} btnName={"Bikes"} value={1000} />
      <Button handleClick={handleClick} btnName={"Classes"} value={666} />
      

      {/* <h1>Hello World</h1> */}
      {/* <Button itemName={"All"} btnColor={"red"} />
      <Button itemName={"Movies"} btnColor={"yellow"} />
      <Button itemName={"cars"} btnColor={"blue"} />
      <Button itemName={"bikes"} btnColor={"brown"} />
      <Button itemName={"Drama"} btnColor={"orange"} />
      <Button itemName={"Mobile"} btnColor={"crimson"} />
      <Button itemName={"Cycle"} btnColor={"pink"} />
      <Button itemName={"College"} btnColor={"lavendar"} /> */}
    </div>
  );
}

export default App;
