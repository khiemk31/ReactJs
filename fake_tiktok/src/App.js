import Content from "./Content";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
//Context Context
//CompA => CompB => CompC

//1. Create context
//2. Provider
//3. Consumer

function App() {
  const context = useContext(ThemeContext);
  return (
    <div style={{ padding: "0px  20px" }}>
      <button onClick={context.toggleTheme}>Toggle Theme</button>
      <Content />
    </div>
  );
}

export default App;
