import { useState } from "react";

//Hooks : những metol , function đc viết sẵn sử dụng trong reactJS k sd trong class Component
//useState hỗ trợ thay đổi dữ liệu (dữ liệu thay đổi giao diện thay đổi theo)
const orders = [100, 200, 300, 500];
function App() {
  //k code ntn vì mỗi lần gọi lại setCounter đều thực hiện tính lại total :
  // const total = orders.reduce((total, current) => total + current);
  // console.log(total);
  // const [counter, setCounter] = useState(total);
  //Cách đúng (giúp tối ưu Performance ) :
  // const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((total, current) => total + current);
  //   console.log(total);
  //   return total;
  // });
  // const handleClick = () => {
  // setCounter(counter + 1);
  // setCounter((prevState) => prevState + 1);
  //+1 prevState= counter+1
  // setCounter((prevState) => prevState + 1);
  //+ thêm 1 prevState= counter+1+1
  //prevState giá trị trước đó của state
  // };
  const [info, setInfo] = useState({
    name: "Nguyen Duy Khiem",
    age: 24,
    address: "Ha Noi ",
  });
  const handleUpdateInfo = () => {
    setInfo({
      ...info,
      bio: "asdfgdsf",
    });
  };
  return (
    <div className="App">
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdateInfo}>Click</button>
    </div>
  );
}

export default App;
