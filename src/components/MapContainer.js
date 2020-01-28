import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer(props) {
  return (
    <Map google={props.google} zoom={8} initialCenter={{ lat: 40.416775, lng: -3.70379 }}>
      {props.filteredEvents.map(event => {
        const lat = event.location.latitude;
        const lng = event.location.longitude;
        return <Marker key={event.id} position={{ lat: lat, lng: lng }} />;
      })}
    </Map>
  );
}

export default GoogleApiWrapper({
  key: 'YOUR_API_KEY'
})(MapContainer);
