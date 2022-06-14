import { useState } from "react";
import Content from "./Content";
import TimeCountDown from "./TimeCountDown";
import Avatar from "./Avatar";

const tabs = ["Content", "Avatar", "TimeCountDown"];
function App() {
  const [type, setType] = useState("Content");
  const renderTab = (type) => {
    switch (type) {
      case "Content":
        return <Content />;
      case "Avatar":
        return <Avatar />;
      case "TimeCountDown":
        return <TimeCountDown />;
      default:
        return null;
    }
  };
  return (
    <div style={{ padding: 20 }}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={
            type === tab
              ? {
                  color: "#FFF",
                  backgroundColor: "#333",
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}
      {/* {type === "Content" ? (
        <Content />
      ) : type === "Avatar" ? (
        <Avatar />
      ) : (
        <TimeCountDown />
      )} */}
      {renderTab(type)}
    </div>
  );
}

export default App;
