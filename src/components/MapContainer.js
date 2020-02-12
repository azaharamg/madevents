import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import EventsDetail from './EventsDetail';

class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markerEvent: ''
		};
	}

	render() {
		const { props } = this;
		const handleShowdetails = event => {
			const findElement = props.filteredEvents.find(element => element.id === event.id);
			this.setState({
				markerEvent: findElement
			});
		};

		return (
			<section className='row justify-content-center'>
				<div className='col-5'>
					{this.state.markerEvent === '' ? (
						<h5>No hay eventos seleccionados</h5>
					) : (
						<EventsDetail markerEvent={this.state.markerEvent} />
					)}
				</div>
				<section className='col-6'>
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
			</section>
		);
	}
}

export default GoogleApiWrapper({
	key: process.env.REACT_APP_MAP_API_KEY
})(MapContainer);
