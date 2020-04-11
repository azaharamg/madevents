import React from 'react';
import SelectOptions from './SelectOptions';
import MapContainer from './MapContainer';
import EventsDetail from './EventsDetail';
import '../stylesheet/mainPage.scss';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: props.location.state.events,
      districts: this.extractDistricts(props.location.state.events),
      categories: this.extractCategories(props.location.state.events),
      selectedDistrict: '',
      selectedCategory: '',
      markerEvent: null,
    };
    this.handleSelectedOption = this.handleSelectedOption.bind(this);
    this.handleShowdetails = this.handleShowdetails.bind(this);
  }

  extractCategories(events) {
    const filteredByCategories = events.filter((event) => event.audience !== undefined).map((event) => event.audience);
    return Array.from(new Set(filteredByCategories));
  }

  extractDistricts(events) {
    const filteredByDistricts = events
      .filter((event) => event.address !== undefined)
      .map((event) => this.getDistrictFromEvent(event));

    // Remove duplicates
    return Array.from(new Set(filteredByDistricts));
  }

  filterByUserInput(events) {
    return events
      .filter((event) => {
        return this.getDistrictFromEvent(event) === this.state.selectedDistrict || this.state.selectedDistrict === '';
      })
      .filter((event) => {
        return event.audience === this.state.selectedCategory || this.state.selectedCategory === '';
      });
  }

  getDistrictFromEvent(event) {
    if (event.address === undefined) {
      debugger;
      return undefined;
    }
    const url = new URL(event.address.district['@id']);
    const pathUrl = url.pathname;
    return pathUrl.substr(pathUrl.lastIndexOf('/') + 1);
  }

  handleSelectedOption(option, selectedValue) {
    this.setState({
      [option]: selectedValue,
    });
  }

  handleShowdetails(marker) {
    const findElement = this.state.allEvents.find((element) => element.id === marker.id);
    this.setState({
      markerEvent: findElement,
    });
  }

  render() {
    const filteredEvents = this.filterByUserInput(this.state.allEvents);

    return (
      <Container>
        <Row>
          <Col>
            <Form className='form'>
              <Form.Label className='form--label'>Seleccione una de las opciones:</Form.Label>
              <Row>
                <Col>
                  <SelectOptions
                    type='selectedDistrict'
                    options={this.state.districts}
                    handleSelected={this.handleSelectedOption}
                  />
                </Col>
                <Col>
                  <SelectOptions
                    type='selectedCategory'
                    options={this.state.categories}
                    handleSelected={this.handleSelectedOption}
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col></Col>
          <Col md='6'>
            <p className='section--map__info'>{`Se han encontrado ${filteredEvents.length} eventos`}</p>
          </Col>
        </Row>

        <Row>
          <Col md='6'>
            <aside className='aside--card'>
              <EventsDetail markerEvent={this.state.markerEvent} />
            </aside>
          </Col>
          <Col md='6'>
            <MapContainer filteredEvents={filteredEvents} handleShowdetails={this.handleShowdetails} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
