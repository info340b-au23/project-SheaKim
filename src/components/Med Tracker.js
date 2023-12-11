import { useState } from 'react';
import calendar from '../img/google-calendar.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
//import { GoogleLogin } from '@react-oauth/google';
import { SyntheticEvent } from 'react';
import ApiCalendar from "react-google-calendar-api";
import React, { useEffect } from "react";


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
  
  // const responseMessage = (response) => {
  //       console.log(response);
  //   };
  // const errorMessage = (error) => {
  //       console.log(error);
  //   };

  // const login = useGoogleLogin({
  //   onSuccess: codeResponse => console.log(codeResponse),
  // flow: 'auth-code',
  // });

  // const config = {
  //   clientId: "737643364541-a4lmervpmj6jubdqm2n0ag2084g4abk3.apps.googleusercontent.com",
  //   apiKey: "AIzaSyBcSh5szoNsvvz7SJ3zvPP0q455hjVa7yU",
  //   scope: "https://www.googleapis.com/auth/calendar",
  //   discoveryDocs: [
  //     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  //   ],
  // };
  
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


  const gapi = window.gapi;

const google = window.google;

 

const CLIENT_ID =

"1084837142274-e4f0f7st0bb948hgvd40o9b7cg6g11ao.apps.googleusercontent.com";

const API_KEY = "AIzaSyD7_-bhPqIKNlnJN8OvPYAUql2Uyl5fD0Q";

const DISCOVERY_DOC =

"https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

const SCOPES = "https://www.googleapis.com/auth/calendar";

 

const accessToken = localStorage.getItem("access_token");

const expiresIn = localStorage.getItem("expires_in");

 

let gapiInited = false,

gisInited = false,

tokenClient;

 

useEffect(() => {

//const expiryTime = new Date().getTime() + expiresIn * 1000;

gapiLoaded();

gisLoaded();

}, []);

 

function gapiLoaded() {

gapi.load("client", initializeGapiClient);

}

 

async function initializeGapiClient() {

await gapi.client.init({

apiKey: API_KEY,

discoveryDocs: [DISCOVERY_DOC],

});

gapiInited = true;

 

if (accessToken && expiresIn) {

gapi.client.setToken({

access_token: accessToken,

expires_in: expiresIn,

});

listUpcomingEvents();

}

}

 

function gisLoaded() {

tokenClient = google.accounts.oauth2.initTokenClient({

client_id: CLIENT_ID,

scope: SCOPES,

DISCOVERY_DOC:

"https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",

callback: "", // defined later

});

 

gisInited = true;

}

 

//Enables user interaction after all libraries are loaded.

 

function handleAuthClick() {

tokenClient.callback = async (resp) => {

if (resp.error) {

throw resp;

}

await listUpcomingEvents();

const { access_token, expires_in } = gapi.client.getToken();

localStorage.setItem("access_token", access_token);

localStorage.setItem("expires_in", expires_in);

};

 

if (!(accessToken && expiresIn)) {

// Prompt the user to select a Google Account and ask for consent to share their data

// when establishing a new session.

tokenClient.requestAccessToken({ prompt: "consent" });

} else {

// Skip display of account chooser and consent dialog for an existing session.

tokenClient.requestAccessToken({ prompt: "" });

}

}

 

//Sign out the user upon button click.

 

function handleSignoutClick() {

const token = gapi.client.getToken();

if (token !== null) {

google.accounts.oauth2.revoke(token.access_token);

gapi.client.setToken("");

localStorage.clear();

}

}

 

async function listUpcomingEvents() {

let response;

try {

const request = {

calendarId: "primary",

timeMin: new Date().toISOString(),

showDeleted: false,

singleEvents: true,

maxResults: 10,

orderBy: "startTime",

};

response = await gapi.client.calendar.events.list(request);

} catch (err) {

document.getElementById("content").innerText = err.message;

return;

}

 

const events = response.result.items;

if (!events || events.length === 0) {

document.getElementById("content").innerText = "No events found.";

return;

}

// Flatten to string to display

const output = events.reduce(

(str, event) =>

`${str}${event.summary} (${

event.start.dateTime || event.start.date

})\n`,

"Events:\n"

);

document.getElementById("content").innerText = output;

}

 

function addManualEvent() {

var event = {

kind: "calendar#event",

summary: "Event 2",

location: "Masai School, Bangalore",

description: "Paty time",

start: {

dateTime: "2023-07-18T01:05:00.000Z",

timeZone: "UTC",

},

end: {

dateTime: "2023-07-18T01:35:00.000Z",

timeZone: "UTC",

},

recurrence: ["RRULE:FREQ=DAILY;COUNT=1"],

attendees: [

{ email: "techmovieadd@gmail.com", responseStatus: "needsAction" },

],

reminders: {

useDefault: true,

},

guestsCanSeeOtherGuests: true,

};

 

var request = gapi.client.calendar.events.insert({

calendarId: "primary",

resource: event,

sendUpdates: "all",

});

request.execute(

(event) => {

console.log(event);

window.open(event.htmlLink);

},

(error) => {

console.error(error);

}

);

}

  return (
    <body>
    {/* <div class="container">
      <div class="tabs">
        <h3 class="active">Today</h3>
        <h3>Long Term</h3>
        <h3>Details</h3>
      </div>
      <div class="tab-content">
        <div class="active">
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
        <div>


        <h2>Long Term</h2>
                <p>See your upcoming medications</p>
                <img src="../img/google-calendar.png" alt="Google calendar screen" width="900" height="600"></img>
        </div>
        <div>
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
    </div> */}


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
    
    {/* <div class="calendar">
    <GoogleOAuthProvider clientId="737643364541-a4lmervpmj6jubdqm2n0ag2084g4abk3.apps.googleusercontent.com">
    <button onClick={() => login()}>Sign in with Google 🚀</button>
    </GoogleOAuthProvider>

  </div> */}

<div>

<button

id="authorize_button"

hidden={accessToken && expiresIn}

onClick={handleAuthClick}

>

Authorize

</button>

<button

id="signout_button"

hidden={!accessToken && !expiresIn}

onClick={handleSignoutClick}

>

Sign Out

</button>

<button

id="add_manual_event"

hidden={!accessToken && !expiresIn}

onClick={addManualEvent}

>

Add Event

</button>

<pre id="content" style={{ whiteSpace: "pre-wrap" }}></pre>

</div>

    {/* <div>
      <div style={{ padding: "0.5em" }}>
        <button onClick={(e) => handleItemClick(e, "sign-in")}>sign-in</button>
        <button onClick={(e) => handleItemClick(e, "sign-out")}>
          sign-out
        </button>
      </div>
      <div style={{ padding: "0.5em" }}>
        <button
          onClick={(e) => {
            const eventFromNow = {
              summary: "Poc Dev From Now",
              time: 480,
            };

            apiCalendar
              .createEventFromNow(eventFromNow)
              .then((result) => {
                console.log(result);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Create Event from now
        </button>
      </div>
      <div style={{ padding: "0.5em" }}>
        <button
          onClick={(e) => {
            apiCalendar.listUpcomingEvents(10).then(({ result }) => {
              console.log(result.items);
              setEvents(result.items);
            });
          }}
        >
          List upcoming events
        </button>
        <div>
          <h4>Events</h4>
          {events.length === 0 && <p>No events to show</p>}
          {events.map((event) => (
            <p key={event.id}>{JSON.stringify(event)}</p>
          ))}
        </div>
      </div>
      <div style={{ padding: "0.5em" }}>
        <button
          onClick={(e) => {
            apiCalendar.listCalendars().then(({ result }) => {
              console.log(result.items);
              setCalendars(result.items);
            });
          }}
        >
          List calendars
        </button>

      </div>
      <div style={{ padding: "0.5em" }}>
        <button
          onClick={(e) => {
            apiCalendar.createCalendar("myCalendar2").then(({ result }) => {
              console.log(result);
            });
          }}
        >
          Create calendar
        </button>
       </div>
    </div> */}


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
