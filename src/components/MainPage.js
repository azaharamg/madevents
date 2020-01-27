import React from 'react';
import ButtonGoBack from './ButtonGoBack';

function MainPage(props) {
  const { events, startDate, endDate } = props.location.state;
  return (
    <div>
      <ButtonGoBack />
      <ul>
        {events
          .filter(event => {
            const eventDate = new Date(event.dtstart).getTime();
            return eventDate >= startDate && eventDate <= endDate;
          })
          .map(event => {
            return (
              <li key={event.id}>{`${event.title} ${event.id} ----Start: ${event.dtstart}----End:${event.dtend}`}</li>
            );
          })}
      </ul>
    </div>
  );
}

export default MainPage;
