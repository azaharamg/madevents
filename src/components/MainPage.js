import React from 'react';
import ButtonGoBack from './ButtonGoBack';
import SelectOptions from './SelectOptions';
import MapContainer from './MapContainer';
import '../stylesheet/mainPage.scss';
import Logo from '../images/logo.png';

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			districts: this.extractDistricts(props.location.state.events),
			categories: this.extractCategories(props.location.state.events),
			selectedDistrict: '',
			selectedCategory: ''
		};
		this.handleSelectedOption = this.handleSelectedOption.bind(this);
	}

	extractCategories(events) {
		const filteredByCategories = events.filter(event => event.audience !== undefined).map(event => event.audience);
		return Array.from(new Set(filteredByCategories));
	}

	extractDistricts(events) {
		const filteredByDistricts = events
			.filter(event => event.address !== undefined)
			.map(event => this.getDistrictFromEvent(event));

		// Remove duplicates
		return Array.from(new Set(filteredByDistricts));
	}

	filterByUserInput(events) {
		return events
			.filter(event => {
				return (
					this.getDistrictFromEvent(event) === this.state.selectedDistrict ||
					this.state.selectedDistrict === ''
				);
			})
			.filter(event => {
				return event.audience === this.state.selectedCategory || this.state.selectedCategory === '';
			});
	}

	getDistrictFromEvent(event) {
		const url = new URL(event.address.district['@id']);
		const pathUrl = url.pathname;
		return pathUrl.substr(pathUrl.lastIndexOf('/') + 1);
	}

	handleSelectedOption(option, selectedValue) {
		this.setState({
			[option]: selectedValue
		});
	}

	render() {
		const { events } = this.props.location.state;
		const filteredEvents = this.filterByUserInput(events);

		return (
			<main className='container mb-5 col-centered'>
				<header className='row justify-content-around'>
					<div className='col-6'>
						<img className='img-fluid fixed-top' src={Logo} alt='logo' />
					</div>
				</header>
				<div className='row justify-content-center'>
					<div className='col-6'>
						<h3>{`Se han encontrado ${filteredEvents.length} eventos`}</h3>
					</div>
				</div>
				<div className='row justify-content-around'>
					<div className='col-3'>
						<SelectOptions
							type='selectedDistrict'
							options={this.state.districts}
							handleSelected={this.handleSelectedOption}
						/>
					</div>
					<div className='col-3'>
						<SelectOptions
							type='selectedCategory'
							options={this.state.categories}
							handleSelected={this.handleSelectedOption}
						/>
					</div>
					<div className='col-3'>
						<ButtonGoBack />
					</div>
				</div>
				<div className='row justify-content-around'>
					<div className='col'>
						<MapContainer filteredEvents={filteredEvents} />
					</div>
				</div>
			</main>
		);
	}
}

export default MainPage;
