import {
  SyntheticEvent,
  useState,
} from 'react';

import ApiCalendar from 'react-google-calendar-api';

const config = {
  "clientId": "737643364541-a4lmervpmj6jubdqm2n0ag2084g4abk3.apps.googleusercontent.com",
  "apiKey": "AIzaSyBcSh5szoNsvvz7SJ3zvPP0q455hjVa7yU",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(config)

const TestDemo = () => {
  const [events, setEvents] = useState([]);
  const [calendars, setCalendars] = useState([]);
  const handleItemClick = (event, name) => {
    if (name === 'sign-in') {
      apiCalendar.handleAuthClick()
    } else if (name === 'sign-out') {
      apiCalendar.handleSignoutClick();
    }
  };

  return (
    <div>
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
        <div>
          <h4>Calendars</h4>
          {calendars.length === 0 && <p>No calendars to show</p>}
          {calendars.map((calendar) => (
            <p key={calendar.id}>{JSON.stringify(calendar)}</p>
          ))}
        </div>
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
    </div>
  );
}

export default TestDemo