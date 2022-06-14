import { useState } from "react";

function App2() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs ?? [];
  });
  const handleAdd = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      //Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  const handleDelete = (index) => {
    console.log(index);
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
    const jsonJobs = JSON.stringify(newJobs);
    localStorage.setItem("jobs", jsonJobs);
    return newJobs;
  };

  const handleDeleteAll = () => {
    setJobs([]);
    localStorage.removeItem("jobs");
  };
  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(text) => setJob(text.target.value)} />
      <button
        onClick={handleAdd}
        style={{
          marginTop: 18,
          fontSize: 15,
          color: "#343122",
          fontWeight: "bold",
        }}
      >
        Thêm
      </button>
      {jobs.map((job, index) => (
        <div style={{ padding: 10, width: 300 }} key={index}>
          <p style={{ width: 200, float: "left", marginRight: 50 }}>{job}</p>
          <button
            onClick={() => handleDelete(index)}
            style={{
              marginTop: 18,
              fontSize: 15,
              color: "#343122",
              fontWeight: "bold",
            }}
          >
            Xóa
          </button>
        </div>
      ))}
      <button
        onClick={handleDeleteAll}
        style={{
          marginTop: 20,
          fontSize: 20,
          color: "#343122",
          fontWeight: "bold",
        }}
      >
        Xóa hết
      </button>
    </div>
  );
}

export default App2;
