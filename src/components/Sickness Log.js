import React, { useState } from 'react';

const SickLog = () => {
  const initialData = {
    symptoms: '',
    description: '',
    date: '',
    comments: '',
  };
  
  const [logData, setLogData] = useState(initialData);
  const [logs, setLogs] = useState([]);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLogData({ ...logData, [name]: value });
  }
      

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      logData.symptoms.trim() === '' || logData.description.trim() === '' || logData.date === ''
    ) {
      return;
    }
    const newLog = {
      id: Date.now(),
      symptoms: logData.symptoms,
      description: logData.description,
      date: logData.date,
      comments: logData.comments,
    };
    setLogs([...logs, newLog]);
    setLogData(initialData); 
  };

  return (
    <div>
      <main>
        <form className="sicktrkr" onSubmit={handleSubmit}>
          <label>Symptoms:</label>
          <textarea name="symptoms" value={logData.symptoms} onChange={handleInputChange}></textarea>
          <label>Description:</label>
          <textarea name="description" value={logData.description} onChange={handleInputChange}></textarea>
          <label>Date of Notice:</label>
          <input name="date" type="date" value={logData.date} onChange={handleInputChange} placeholder="YYYY-MM-DD"></input>
          <label>Extra Comments:</label>
          <textarea name="comments" value={logData.comments} onChange={handleInputChange}></textarea>
          <button type="submit">Log Sickness</button>
        </form>
        <div>
        </div>
      </main>
    </div>
  );
}

export default SickLog;
