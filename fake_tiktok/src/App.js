import { useState } from "react";
import Content from "./Content";
function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <Content />}
    </div>
  );
}

export default App;
