
import { useStore, actions } from "./store";
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [state, dispatch] = useStore();
  const [status, setStatus] = useState(true);
  const { todos, todoInput } = state;
  const [index, setIndex] = useState(0);
  const inputRef = useRef();

  const handleAdd = () => {
    if (todos !== "") {
      dispatch(actions.addTodo(todoInput));
      dispatch(actions.setTodoInput(""));
      inputRef.current.focus();
    }
  };
  const handleRemove = (index) => {
    dispatch(actions.removeTodo(index));
  };

  function handleUpdate() {
    dispatch(actions.updateTodo(index, todoInput));
    dispatch(actions.setTodoInput(""));
    setStatus(true);
  }

  return (
    <div className="input-group" style={{ padding: 20 }}>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />

      <button
        className="btn"
        onClick={status === true ? handleAdd : handleUpdate}
      >
        {status === true ? "Thêm" : "Update"}
      </button>

      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button className="btn" onClick={() => handleRemove(index)}>
            Xoá
          </button>
          <button
            className="btn"
            onClick={() => {
              dispatch(actions.setTodoInput(todo));
              setStatus(false);
              setIndex(index);
            }}
          >
            Sửa
          </button>
        </li>
      ))}
    </div>
  );
}

export default App;
