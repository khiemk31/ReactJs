import { useEffect, useState } from "react";

function TimeCountDown() {
  const [countDown, setCountDown] = useState(100);
  useEffect(() => {
    const timerID = setInterval(() => {
      setCountDown((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }, 100);
    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <h1>{countDown}</h1>
    </div>
  );
}

export default TimeCountDown;
