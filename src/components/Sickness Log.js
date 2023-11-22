import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const SickLog = () => {
  const initialData = {
    symptoms: '',
    description: '',
    date: new Date(), 
    comments: '',
  };

  const [logData, setLogData] = useState(initialData);
  const [logs, setLogs] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLogData({ ...logData, [name]: value });
  };

  const handleDateChange = (date) => {
    setLogData({ ...logData, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      logData.symptoms.trim() === '' || logData.description.trim() === '' || logData.date === null
    ) {
      return;
    }
    const date = logData.date.toISOString().split('T')[0];
    const newLog = {
      id: Date.now(),
      symptoms: logData.symptoms,
      description: logData.description,
      date: date,
      comments: logData.comments,
    };
    setLogs([...logs, newLog]);
    setLogData(initialData);
    alert('Sickness has been logged! Look at the graph to see a visualization of your symptoms');
  };

  return (
    <div>
      <main>
        <form className="sicktrkr" onSubmit={handleSubmit}>
          <label>Symptoms:</label>
          <textarea name="symptoms" value={logData.symptoms} onChange={handleInputChange} ></textarea>
          <label>Description:</label>
          <textarea name="description" value={logData.description} onChange={handleInputChange} ></textarea>
          <label>Date of Notice:</label>
          <Calendar onChange={handleDateChange} value={logData.date} />
          <label>Extra Comments:</label>
          <textarea name="comments" value={logData.comments} onChange={handleInputChange} ></textarea>
          <button type="submit">Log Sickness</button>
        </form>
        <div>
        </div>
      </main>
    </div>
  );
};

export default SickLog;

