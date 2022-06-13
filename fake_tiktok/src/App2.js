import { useState } from "react";

function App2() {
  const storageJobs = JSON.parse(localStorage.getItem("jobs"));

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.parse(JSON.stringify(newJobs));
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(text) => setJob(text.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App2;
