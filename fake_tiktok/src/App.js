import { useState } from "react";

const listGift = ["gift1", "gift2", "gift3"];

const courses = [
  {
    id: 1,
    name: "Course 1",
  },
  {
    id: 2,
    name: "Course 2",
  },
  {
    id: 3,
    name: "Course 3",
  },
];
function App() {
  const [checked, setChecked] = useState(2);

  console.log(checked);
  const handleSubmit = () => {
    console.log({ id: checked });
    console.log({ ids: checkbox });
  };
  const [checkbox, setCheckbox] = useState([]);
  const handleCheckBoxChange = (id) => {
    setCheckbox((check) => {
      const isChecked = checkbox.includes(id);
      if (isChecked) {
        return checkbox.filter((item) => item !== id);
      } else {
        return [...check, id];
      }
    });
  };
  console.log({ id: checkbox });
  const [gift, setGift] = useState();

  // const getGiftButton = () => {
  //   const index = Math.floor(Math.random() * listGift.length);
  //   console.log(listGift[index]);
  //   setGift((gift) => listGift[index]);
  // };

  const [name, setName] = useState();
  return (
    // <div className="App">
    //   <h1>{gift || "Chưa có phần thưởng"}</h1>
    //   <button onClick={getGiftButton}>Lấy phần thưởng</button>
    // </div>
    //One-way binding  : ràng buộc 1 chiều vì giao diện thay đổi thì state thay đổi VD:
    // <div style={{ padding: 30 }}>
    //   <input onChange={(text) => setName(text.target.value)} />
    // </div>
    //Tow-way binding : ràng buộc 2 chiều giao diện thay đổi state thay đổi và khi set value state lại thẻ input thì giao diện thay đổi VD:
    // <div style={{ padding: 30 }}>
    //   <input value={name} onChange={(text) => setName(text.target.value)} />
    //   <button onClick={() => setName("Đã đc thay đổi giá trị")}>
    //     Thay đổi dữ liệu Input
    //   </button>
    // </div>
    <div style={{ padding: 30 }}>
      <p>Radio</p>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <p>CheckBox</p>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checkbox.includes(course.id)}
            onChange={() => handleCheckBoxChange(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Đăng ký</button>
    </div>
  );
}

export default App;
