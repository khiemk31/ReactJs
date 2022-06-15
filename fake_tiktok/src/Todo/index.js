import { useRef, useReducer } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, removeJob } from "./action";
import logger from "./logger";

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };
  return (
    <div style={{ padding: "0px  20px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        type="text"
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Thêm Mới</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(removeJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
