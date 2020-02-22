import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer(props) {
	const handleShowdetails = marker => {
		props.handleShowdetails(marker);
	};

	return (
		<section className='row justify-content-center'>
			<Map
				style={{ height: '50vh', width: '50vw' }}
				google={props.google}
				zoom={11}
				initialCenter={{ lat: 40.416775, lng: -3.70379 }}
			>
				{props.filteredEvents.map(event => {
					const lat = event.location.latitude;
					const lng = event.location.longitude;
					return (
						<Marker
							key={event.id}
							id={event.id}
							position={{ lat: lat, lng: lng }}
							onClick={handleShowdetails}
						/>
					);
				})}
			</Map>
		</section>
	);
}

export default GoogleApiWrapper({
	key: process.env.REACT_APP_MAP_API_KEY
})(MapContainer);
