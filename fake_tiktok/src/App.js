import { useState, memo } from "react";
import Content from "./Content";
//1. memo() -> Higher Order Component (HOC)
//2. useCallback()

//Hooks
//HOC
//Render props

function App() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const changeNumberInContent = () => {
    setNumber(Math.random());
  };
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ padding: "10px  32px" }}>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <Content number={number} />}
      <h1>{count}</h1>
      <button onClick={changeNumberInContent}>Change number in content</button>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
