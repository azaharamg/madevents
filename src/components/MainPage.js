import React from 'react';

function MainPage(props) {
  const { events } = props.location.state;
  return (
    <div>
      <ul>
        {events.map(event => {
          return <li key={event.id}>{`${event.title} ----Start: ${event.dtstart}----End:${event.dtend}`}</li>;
        })}
      </ul>
    </div>
  );
}

export default MainPage;
