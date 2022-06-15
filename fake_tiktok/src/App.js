import { useState, useCallback } from "react";
import Content from "./Content";
//1. memo() -> Higher Order Component (HOC)
//2. useCallback()

//Hooks
//HOC
//Render props

function App() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div style={{ padding: "10px  32px" }}>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <Content onIncrease={handleClick} />}
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
