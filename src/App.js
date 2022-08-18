import React, { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSubmit = () => {
    setJobs((prev) => [...prev, job]);
    setJob("");
  };

  return (
    <div className="App" style={{ padding: 30 }}>
      <input value={job} type="text" onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
