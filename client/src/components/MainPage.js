import SelectOptions from './SelectOptions'
import MapContainer from './MapContainer'
import EventsDetail from './EventsDetail'
import '../stylesheet/mainPage.scss'

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function MainPage() {
  const location = useLocation()

  const extractCategories = (events) => {
    const filteredByCategories = events.filter((event) => event.audience !== undefined).map((event) => event.audience)
    return Array.from(new Set(filteredByCategories))
  }

  const getDistrictFromEvent = (event) => {
    if (event.address === undefined) {
      debugger
      return undefined
    }
    const url = new URL(event.address.district['@id'])
    const pathUrl = url.pathname
    return pathUrl.substr(pathUrl.lastIndexOf('/') + 1)
  }

  const extractDistricts = (events) => {
    const filteredByDistricts = events
      .filter((event) => event.address !== undefined)
      .map((event) => getDistrictFromEvent(event))

    // Remove duplicates
    return Array.from(new Set(filteredByDistricts))
  }

  const [state, setState] = useState({
    allEvents: location.state.events,
    districts: extractDistricts(location.state.events),
    categories: extractCategories(location.state.events),
    selectedDistrict: '',
    selectedCategory: '',
    markerEvent: null
  })

  const filterByUserInput = (events) => {
    return events
      .filter((event) => {
        return getDistrictFromEvent(event) === state.selectedDistrict || state.selectedDistrict === ''
      })
      .filter((event) => {
        return event.audience === state.selectedCategory || state.selectedCategory === ''
      })
  }

  const filteredEvents = filterByUserInput(state.allEvents)

  const handleSelectedOption = (option, selectedValue) => {
    setState({
      ...state,
      [option]: selectedValue
    })
  }

  const handleShowdetails = (marker) => {
    const findElement = state.allEvents.find((element) => element.id === marker.id)
    setState({
      ...state,
      markerEvent: findElement
    })
  }

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
                  options={state.districts}
                  handleSelected={handleSelectedOption}
                />
              </Col>
              <Col>
                <SelectOptions
                  type='selectedCategory'
                  options={state.categories}
                  handleSelected={handleSelectedOption}
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
            <EventsDetail markerEvent={state.markerEvent} />
          </aside>
        </Col>
        <Col md='6'>
          <MapContainer filteredEvents={filteredEvents} handleShowdetails={handleShowdetails} />
        </Col>
      </Row>
    </Container>
  )
}
