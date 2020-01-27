import React from 'react';
import ButtonGoBack from './ButtonGoBack';
import SelectOptions from './SelectOptions';
import MapContainer from './MapContainer';

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
        return this.getDistrictFromEvent(event) === this.state.selectedDistrict || this.state.selectedDistrict === '';
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
    const eventList = filteredEvents.map(event => {
      return (
        <li
          key={event.id}
        >{`${event.title} ${event.id} ----Start: ${event.dtstart}----End:${event.dtend} ---Localization:longitud${event.location.longitude}, latitud${event.location.latitude}`}</li>
      );
    });

    return (
      <div>
        <ButtonGoBack />
        <form>
          <SelectOptions
            type='selectedDistrict'
            options={this.state.districts}
            handleSelected={this.handleSelectedOption}
          />
          <SelectOptions
            type='selectedCategory'
            options={this.state.categories}
            handleSelected={this.handleSelectedOption}
          />
        </form>
        <ul>{eventList}</ul>
        <MapContainer filteredEvents={filteredEvents} />
      </div>
    );
  }
}

export default MainPage;
