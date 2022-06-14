import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];
function Content() {
  const [posts, setPost] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 500);
    };
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    console.log("addEventListener");
    //Cleanup Function :  gọi trc khi component bị unmoun
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      console.log("removeEventListener");
    };
  }, []);

  return (
    <div>
      <h1>{width}</h1>
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
      <div style={{ padding: 20 }}>
        {posts.map((post) => (
          <h1 key={post.id}>{post.name || post.title}</h1>
        ))}
      </div>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Go to Top
        </button>
      )}
    </div>
  );
}

export default Content;
