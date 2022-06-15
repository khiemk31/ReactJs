import { useState, useReducer } from "react";

//useState:
//1. Init state : 0
//2. Actions : Up (state+1) / Down (state-1)

//useReducer:
//1. Init state : 0
//2. Actions : Up (state+1) / Down (state-1)
//3. Reducer
//4. Dispath =>>> example:

//Init state
const initState = 0;

//Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//Reducer
const reducer = (state, action) => {
  console.log("reducer running ...");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error(`Invalid action `);
  }
};
function App() {
  const [count, setCount] = useState(0);
  const [count2, dispatch] = useReducer(reducer, initState);

  return (
    <div style={{ padding: "0px  20px" }}>
      <p>Sử dụng useState</p>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <p>Sử dụng useReducer</p>
      <h1>{count2}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    </div>
  );
}

export default App;
