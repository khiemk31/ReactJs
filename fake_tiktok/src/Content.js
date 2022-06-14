import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPost] = useState([]);
  const [type, setType] = useState("posts");
  //Thao tác thay đổi nằm trong side effects phải khai trong useEffect  (thứ tự : UI Render => useEffect ) việc khai trong useEffect tránh việc code ở đó chạy trc gây lỗi
  //1.useEffect(callback):
  // - Gọi callback mỗi khi component re-render
  // - Gọi callback sau khi component thêm element vào DOM
  // VD:

  //   useEffect(() => {
  //     console.log("Re-render", title);
  //     document.title = title;

  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((posts) => {
  //         setPost(posts);
  //       });
  //   });
  //2.useEffect(callback,[]) : -Chỉ gọi callback 1 lần sau khi component mounted
  //VD:
  //   useEffect(() => {
  //     console.log("Re-render", title);
  //     document.title = title;

  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((posts) => {
  //         setPost(posts);
  //       });
  //   }, []);

  // 3.useEffect(callback,[deps]) : -Callback sẽ đc gọi lại mỗi khi component đc gọi lại
  console.log(type);

  useEffect(() => {
    console.log("Re-render", title);
    document.title = title;
    console.log("title change");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts);
      });
  }, [type]);

  return (
    <div>
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
      <input
        type="text"
        value={title}
        onChange={(text) => setTitle(text.target.value)}
      />
      <div style={{ padding: 20 }}>
        {posts.map((post) => (
          <h1 key={post.id}>{post.name || post.title}</h1>
        ))}
      </div>
    </div>
  );
}

export default Content;
