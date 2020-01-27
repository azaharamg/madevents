import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.filteredEvents); //[{key}]
    const firstEvent = this.props.filteredEvents[0];
    const lat = firstEvent.location.latitude;
    const lng = firstEvent.location.longitude;
    return (
      <Map google={this.props.google} zoom={8} initialCenter={{ lat: 40.416775, lng: -3.70379 }}>
        <Marker position={{ lat: lat, lng: lng }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  key: 'YOUR_API_KEY'
})(MapContainer);
