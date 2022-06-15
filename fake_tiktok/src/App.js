import { useState } from "react";

import Content from "./Content";
//useEffect :
//1. Cập nhật lại state
//2. Cập nhật lại DOM (mutated)
//3. Render lại UI
//4. Gọi cleanup nếu deps thay đổi
//5. Gọi useEffect callback

//useLayoutEffect :
//1. Cập nhật lại state
//2. Cập nhật lại DOM (mutated)
//3. Gọi cleanup nếu deps thay đổi (sync)
//4. Gọi useLayoutEffect callback (sync)
//5. Render lại UI

function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <Content />}
    </div>
  );
}

export default App;
