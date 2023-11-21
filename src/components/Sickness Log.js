import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header'

const SickLog = () => {
  const [logData, setLogData] = useState({
      symptoms: '',
      description: '',
      date: '',
      comments: '',
    });
    
  const [logs, setLogs] = useState([]);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value); 
    setLogData({ ...logData, [name]: value });
  }
      

  const handleSubmit = (e) => {
    e.preventDefault();
    if (logData.symptoms.trim() === '' || logData.description.trim() === '' || logData.date === '') {
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
    setLogData({ 
      symptoms: '',
      description: '',
      date: '',
      comments: '',
    });
  }

  return (
    <div>
      <Header /> 
      <main>
        <form className="sicktrkr" onSubmit={handleSubmit}>
          <label>Symptoms:</label>
          <textarea value={logData.symptoms} onChange={handleInputChange}></textarea>
          <label>Description:</label>
          <textarea value={logData.description} onChange={handleInputChange}></textarea>
          <label>Date of Notice:</label>
          <input type="date" value={logData.date} onChange={handleInputChange} />
          <label>Extra Comments:</label>
          <textarea value={logData.comments} onChange={handleInputChange}></textarea>
          <button type="submit">Log Sickness</button>
        </form>
        <div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SickLog;
