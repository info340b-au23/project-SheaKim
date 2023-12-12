import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Visualization from './Visualization';
import DynamicTable from './DynamicTable';
import './SicknessLog.css';
import { getDatabase, ref, push as firebasePush } from 'firebase/database'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const SickLog = (props) => {
  const [currentUser, setCurrentUser] = useState(null)
  const auth = getAuth();

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) { //firebaseUser defined: is logged in
      console.log('logged in', firebaseUser.displayName);
      console.log(firebaseUser.uid);
      setCurrentUser(firebaseUser);
      //do something with firebaseUser (e.g. assign to a state variable)
    }
    else { //firebaseUser is undefined: is not logged in
      console.log('logged out');
      setCurrentUser(null);
    }
  });

  const db = getDatabase();
  let data = '';
  let userId = '';
  let userRef = '';
  let logRef = '';

  if (currentUser !== null) {
    data = "users/";
    userId = currentUser.uid;
    userRef = data.concat(userId);
    logRef = ref(db, userRef.concat("/sickLogs"));
  }


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
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();
    console.log(dateString);
    const newLog = {
      id: Date.now(),
      symptoms: logData.symptoms,
      description: logData.description,
      date: dateString,
      comments: logData.comments,
    };
    console.log(logData);
    firebasePush(logRef, logData)
      .then(() => console.log("data saved successfully!"))
      .catch(err => console.log(err)); //log any errors for debugging
    setLogs([...logs, newLog]);
    setLogData(initialData);
    alert('Sickness has been logged! Look at the graph to see a visualization of your symptoms');
  };

  return (
    <div className="row">
      <div className="col-sm">
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
      </div>

      <div className="col-sm mt-5 mr-6">
        <DynamicTable data={logs} />
      </div>

      <div>
        <Visualization logs={logs} />
      </div>
    </div>
  );
};

export default SickLog;

