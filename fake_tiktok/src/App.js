import { useState } from "react";
import Content from "./Content";
function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      {show && <Content />}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
