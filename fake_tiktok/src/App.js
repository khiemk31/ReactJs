import "./App.css";
import Heading from "./components/Heading";
import GlobalStyles from "./components/GlobalStyles";
import Paragraph from "./components/Paragraph";
import Button from "./components/Button";
function App() {
  return (
    <GlobalStyles>
      <div style={{ padding: "0 32px" }}>
        <h1 className="heading">CSS</h1>
        <Heading />
        <Paragraph />
      </div>
      <div className="d-flex">
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </div>
      <Button />
      <Button primary />
      <Button disabled />
    </GlobalStyles>
  );
}

export default App;
