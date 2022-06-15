import { useRef, useState, memo } from "react";

function Content({ onIncrease }) {
  console.log("re-render");
  return (
    <div style={{ padding: "10px  32px" }}>
      <h1>Hello World </h1>
      <button onClick={onIncrease}>Click me!</button>
    </div>
  );
}

export default memo(Content);
