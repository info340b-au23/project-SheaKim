import { useState } from 'react';
import calendar from '../img/google-calendar.png';
import React, { useEffect } from "react";
import Calendar from 'react-calendar';


export default function MedTracker() {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  const [formFields, setFormFields] = useState([
    { medicine: '', intakeinterval: '' },
  ]);

  const handleDeleteCheckedReminders = () => {
    const uncheckedReminders = todayReminders.filter((reminder) => !reminder.checked);
    setTodayReminders(uncheckedReminders);
  };


  // let tabs = document.querySelectorAll(".tabs h3");
  // let tabContents = document.querySelectorAll(".tab-content div");
  // tabs.forEach((tab, index) => {
  //   tab.addEventListener("click", () => {
  //     tabContents.forEach((content) => {
  //       content.classList.remove("active");
  //     });
  //     tabs.forEach((tab) => {
  //       tab.classList.remove("active");
  //     });
  //     tabContents[index].classList.add("active");
  //     tabs[index].classList.add("active");
  //   });
  // });

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      medicine: '',
      intakeinterval: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  const [dose, setDose] = useState('pill(s)');
  const [amount, setAmount] = useState('2');

  const handleDoseChange = (event) => {
    setDose(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const Dropdown = ({ label, value, options, onChange }) => {

    return (

      <label>

        {label}

        <select value={value} onChange={onChange}>

          {options.map((option) => (

            <option value={option.value}>{option.label}</option>

          ))}

        </select>

      </label>

    );

  };



  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState('');

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleEventTitleChange = (e) => {
    setEventTitle(e.target.value);
  };

  // Renamed handleAddEvent to handleNewReminder
  const [todayReminders, setTodayReminders] = useState([]);

  const handleNewReminder = () => {
    if (eventTitle.trim() === '') {
      alert('Please enter a reminder title.');
      return;
    }

    const newReminder = { date, title: eventTitle };
    setEvents([...events, newReminder]); // Update the global events state
    setTodayReminders([...todayReminders, newReminder]); // Update the Today tab's reminders
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

        {/* <input type="radio" id="tabfree" name="mytabs" checked="checked" />
        <label for="tabfree">Today</label>
        <div class="tab">
          <h2>Today</h2>
          <div class="checklist">
            <label class="container">Take MEDICATION A (1 pill) at TIME
              <input type="checkbox"></input>
              <span class="checkmark"></span>
            </label>
            <label class="container">TAKE MEDICATION B (2 pills) at TIME and TIME
              <input type="checkbox"></input>
              <span class="checkmark"></span>
            </label>
            <label class="container">Pick up MEDICATION C in <b>2</b> days
              <input type="checkbox"></input>
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div> */}

      <input type="radio" id="tabsilver" name="mytabs" />
      <label for="tabsilver">Long Term</label>
      <div class="tab">
        <h2>Long Term</h2>
        <p>See your upcoming medications</p>
        <div>
          <h1>Event Calendar</h1>
          <div>
            <label>
              Reminder Title:
              <input
                type="text"
                value={eventTitle}
                onChange={handleEventTitleChange}
              />
            </label>
            <button onClick={handleNewReminder}>Add Reminder</button>
          </div>
          <div>
            <label>Select Date: </label>
            <Calendar onChange={handleDateChange} value={date} />
          </div>
        </div>
      </div>

      <input type="radio" id="tabgold" name="mytabs" />
      <label for="tabgold">Details</label>
      <div class="tab">
        <h2>Details</h2>
        <p>See all your medication details here</p>
        <ol class="rounded-list">
          <li><a href="">MEDICATION A</a></li>
          <ol>
            <li><a href="">1 time a day (anytime)</a></li>
            <li><a href="">2 pills</a></li>
            <li><a href="">Note: Take after eating</a></li>
          </ol>
          <li><a href="">MEDICATION B</a>
            <ol>
              <li><a href="">1 time a day (anytime)</a></li>
              <li><a href="">1 pill</a></li>
              <li><a href="">Note: Birth Control</a></li>
            </ol>
          </li>
          <li><a href="">MEDICATION C</a>
            <ol>
              <li><a href="">1 time a week</a></li>
              <li><a href="">1 teaspoon</a></li>
              <li><a href="">Note: NONE</a></li>
            </ol>
          </li>
        </ol>
      </div>
      </div>


      <div className="MedTracker">
        <form onSubmit={submit}>
          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <input
                  name='medicine'
                  placeholder='Medicine Name'
                  onChange={event => handleFormChange(event, index)}
                  value={form.name}
                />
                <input
                  name='intakeinterval'
                  placeholder='Intake Interval (per day)'
                  onChange={event => handleFormChange(event, index)}
                  value={form.age}
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

                    value={dose}

                    onChange={handleDoseChange}

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

                    value={amount}

                    onChange={handleAmountChange}

                  />

                </div>

                <button onClick={() => removeFields(index)}>Remove</button>
              </div>
            )
          })}

        </form>
        <button onClick={addFields}>Add More..</button>
        <br />
        <button onClick={submit}>Submit</button>
      </div>
      </div>
  );

        }