import { useState } from 'react';
import calendar from '../img/google-calendar.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
//import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect } from "react";
import Calendar from 'react-calendar';


export default function MedTracker() {

  let tabs = document.querySelectorAll(".tabs h3");
    let tabContents = document.querySelectorAll(".tab-content div");
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabContents.forEach((content) => {
                content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

  const [formFields, setFormFields] = useState([
    { medicine: '', intakeinterval: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

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
  
  const responseMessage = (response) => {
        console.log(response);
    };
  const errorMessage = (error) => {
        console.log(error);
    };

  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
  flow: 'auth-code',
  });

  const config = {
    clientId: "737643364541-a4lmervpmj6jubdqm2n0ag2084g4abk3.apps.googleusercontent.com",
    apiKey: "AIzaSyBcSh5szoNsvvz7SJ3zvPP0q455hjVa7yU",
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
  };

  // const [date, setDate] = useState(new Date());
  
  // const apiCalendar = new ApiCalendar(config);

  // const TestDemo = () => {
  //   const [events, setEvents] = useState([]);
  //   const [calendars, setCalendars] = useState([]);
  //   const handleItemClick = (event, name) => {
  //     if (name === 'sign-in') {
  //       apiCalendar.handleAuthClick()
  //     } else if (name === 'sign-out') {
  //       apiCalendar.handleSignoutClick();
  //     }
  //   };



  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState('');

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleEventTitleChange = (e) => {
    setEventTitle(e.target.value);
  };

  const handleAddEvent = () => {
    if (eventTitle.trim() === '') {
      alert('Please enter an event title.');
      return;
    }

    const newEvent = { date, title: eventTitle };
    setEvents([...events, newEvent]);
    setEventTitle('');
  };


  return (
    <body>

    <div class="mytabs">
               <input type="radio" id="tabfree" name="mytabs" checked="checked" />
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
             </div>
        
              <input type="radio" id="tabsilver" name="mytabs" />
              <label for="tabsilver">Long Term</label>
              <div class="tab">
                <h2>Long Term</h2>
                <p>See your upcoming medications</p>
                <img src={calendar} alt="Google calendar screen" width="900" height="600"></img>
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
    
    <GoogleOAuthProvider clientId="737643364541-a4lmervpmj6jubdqm2n0ag2084g4abk3.apps.googleusercontent.com">
    <button onClick={() => login()}>Sign in with Google 🚀</button>
    </GoogleOAuthProvider>


    <div>
      <h1>Event Calendar</h1>
      <div>
        <label>
          Event Title:
          <input type="text" value={eventTitle} onChange={handleEventTitleChange} />
        </label>
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <div>
        <label>Select Date: </label>
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <div>
        <h2>Events:</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.title} - {event.date.toDateString()}
            </li>
          ))}
        </ul>
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
</body>

  );
}
