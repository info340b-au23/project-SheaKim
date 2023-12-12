import { useState } from 'react';
import calendar from '../img/google-calendar.png';
import React, { useEffect } from "react";
import Calendar from 'react-calendar';
import './SicknessLog.css';


export default function MedTracker() {

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [dose, setDose] = useState('pill(s)');
  const [amount, setAmount] = useState('2');
  const [detailsContent, setDetailsContent] = useState([]);
  const [formFields, setFormFields] = useState([{ medicine: '', intakeinterval: '' }]);



  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };


  const handleDeleteCheckedReminders = () => {
    const uncheckedReminders = todayReminders.filter((reminder) => !reminder.checked);
    setTodayReminders(uncheckedReminders);
  };


  const handleFormChange = (event, index) => {
    const { name, value } = event.target;
    let data = [...formFields];
    data[index] = { ...data[index], [name]: value };
    setFormFields(data);
  };
  

  const handleDetailsUpdate = () => {
    const content = formFields.map((medication, index) => (
      <div key={index}>
        <h3>{medication.medicine}</h3>
        <p>{medication.intakeinterval} times a day</p>
        <p>{medication.amount} {medication.dose}</p>
      </div>
    ));
    setDetailsContent(content);
  };


  useEffect(() => {
    handleDetailsUpdate();
  }, [formFields, dose, amount]);

  const submit = (e) => {
    e.preventDefault();
    handleDetailsUpdate();
    setFormFields([{ medicine: '', intakeinterval: '', dose: '', amount: '' }]);
  };

  const addFields = () => {
    setFormFields([...formFields, { medicine: '', intakeinterval: '', dose: '', amount: '' }]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  const handleDoseChange = (event, index) => {
    const { value } = event.target;
    let data = [...formFields];
    data[index] = { ...data[index], dose: value };
    setFormFields(data);
  };

  const handleAmountChange = (event, index) => {
    const { value } = event.target;
    let data = [...formFields];
    data[index] = { ...data[index], amount: value };
    setFormFields(data);
  };

  const Dropdown = ({ label, value, options, onChange }) => (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );


  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState('');

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleEventTitleChange = (e) => {
    setEventTitle(e.target.value);
  };

  const [todayReminders, setTodayReminders] = useState([]);

  const handleNewReminder = () => {
    if (eventTitle.trim() === '') {
      alert('Please enter a reminder title.');
      return;
    }

    const newReminder = { date, title: eventTitle };
    setEvents([...events, newReminder]);
    setTodayReminders([...todayReminders, newReminder]);
    setEventTitle('');
  };

  useEffect(() => {
    let tabs = document.querySelectorAll('.mytabs input[type="radio"]');
    tabs.forEach((tab, index) => {
      tab.addEventListener('change', () => {
        handleTabClick(index);
      });
    });
  }, []);

    return (
      <div>
       <div className="mytabs">
        <div className="mytabs">
          <input
            type="radio"
            id="tabfree"
            name="mytabs"
            checked={activeTabIndex === 0}
            onChange={() => handleTabClick(0)}
          />
          <label htmlFor="tabfree">Today</label>
          <div className={`tab ${activeTabIndex === 0 ? 'active' : ''}`}>
            <h2>Today</h2>
            <div className="checklist">
              {todayReminders.map((reminder, index) => (
                <label key={index} className="container">
                  {reminder.title} on {reminder.date.toDateString()}
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      setTodayReminders((prevReminders) =>
                        prevReminders.map((prevReminder, i) =>
                          index === i ? { ...prevReminder, checked: isChecked } : prevReminder
                        )
                      );
                    }}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
              <button onClick={handleDeleteCheckedReminders}>Delete Checked Reminders</button>
            </div>
          </div>
        </div>

<div className="mytabs">
        <input type="radio" id="tabsilver" name="mytabs" />
        <label htmlFor="tabsilver">Long Term</label>
        <div className={`tab ${activeTabIndex === 1 ? 'active' : ''}`}>
          <h2>Reminder Form</h2>
          <p>Set reminders for your upcoming medications!</p>
          <div>
            <h1>Calendar</h1>
            <div>
              <label>
                Reminder Title:
                <input type="text" value={eventTitle} onChange={handleEventTitleChange} />
              </label>
              <button onClick={handleNewReminder}>Add Reminder</button>
            </div>
            <div>
              <label>Select Date: </label>
              <Calendar onChange={handleDateChange} value={date} />
            </div>
          </div>
        </div>
      </div>

      <div className="mytabs">
        <input type="radio" id="tabgold" name="mytabs" />
        <label htmlFor="tabgold">Details</label>
        <div className={`tab ${activeTabIndex === 2 ? 'active' : ''}`}>
          <h2>Details</h2>
          <p>See and add all your medication details here</p>
          <div className="details-content">
            {detailsContent.length > 0 ? detailsContent : <p>No details available</p>}
          </div>
        </div>
      </div>
      

      <div className="MedTracker">
            <form onSubmit={submit}>
              {formFields.map((form, index) => {
                return (
                  <div key={index}>
                <input
                  name="medicine"
                  placeholder="Medicine Name"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.medicine}
                />
                <input
                  name="intakeinterval"
                  placeholder="Intake Interval (per day)"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.intakeinterval}
                />

              <div>
              <Dropdown
                label="Type of Dosage"
                options={[
                  { label: 'Capsules', value: 'capsule' },
                  { label: 'Pills', value: 'pills' },
                  { label: 'Tablespoon', value: 'tablespoon' },
                  { label: 'Teaspoon', value: 'teaspoon' },
                ]}
                value={form.dose}
                onChange={(event) => handleDoseChange(event, index)}
              />

              <Dropdown
                label="Number of Doses"
                options={[
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                  { label: '5', value: '5' },
                  { label: '6', value: '6' },
                  { label: '7', value: '7' },
                  { label: '8', value: '8' },
                ]}
                value={form.amount}
                onChange={(event) => handleAmountChange(event, index)}
              />
                                  </div>
                    <button onClick={() => removeFields(index)}>Remove</button>
                  </div>
                );
              })}
            </form>
            <button onClick={addFields}>Add More..</button>
            <br />
            <button onClick={submit}>Submit</button>
          </div>
    </div>
    </div>
  );

        }
