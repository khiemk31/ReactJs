import { useEffect, useLayoutEffect, useState } from "react";

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

function useLayoutEffectDemo() {
  const [count, setCount] = useState(1);

  //   useEffect(() => {
  //     if (count > 3) {
  //       return setCount(0);
  //     }
  //   }, [count]);
  useLayoutEffect(() => {
    if (count > 3) {
      return setCount(0);
    }
  }, [count]);
  const handleRun = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
}

export default useLayoutEffectDemo;
