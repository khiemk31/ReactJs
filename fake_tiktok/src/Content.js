import { useRef, useState, memo } from "react";

function Content({ number }) {
  console.log("re-render");
  return (
    <div style={{ padding: "10px  32px" }}>
      <h1>Hello World {number}</h1>
    </div>
  );
}

export default memo(Content);
