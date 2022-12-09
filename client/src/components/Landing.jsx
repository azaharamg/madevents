import { Link } from 'react-router-dom'
import getData from '../service/serverData.js'
import DatePicker, { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import 'react-datepicker/dist/react-datepicker.css'
import '../stylesheet/landing.scss'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'

registerLocale('es', es)

export default function Landing() {
  const [events, setEvents] = useState([])
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  useEffect(() => {
    getData().then((data) => {
      setEvents(data)
    })
  }, [startDate, endDate])

  const handleSetStartDate = (date) => {
    setStartDate(new Date(date).setHours(0, 0, 0, 0))
  }

  const handleSetEndDate = (date) => {
    setEndDate(new Date(date).setHours(23, 59, 59, 999))
  }

  const filterEventsByDates = () => {
    if (!events) return
    return events.filter((event) => {
      const eventDate = new Date(event.dtstart).getTime()
      return eventDate >= startDate && eventDate <= endDate
    })
  }

  return (
    <Container className='main text-center'>
      <Row>
        <Col className='columns'>
          <section className='main--section'>
            <h1 className='main--section__title'>Elige tus fechas preferidas</h1>
            <p className='main--section__info text-justify'>
              ¡Aplicación web para consultar los eventos en Madrid, así encontrarás fácilmente nuevos eventos a los que
              asistir!
            </p>
          </section>
        </Col>
        <Col className='columns'>
          <div className='rectangle'></div>
          <section className='date--section d-flex justify-content-around'>
            <DatePicker
              className='date--section__calendar'
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={handleSetStartDate}
              minDate={new Date()}
              locale='es'
              dateFormat='dd/MM/yyyy'
              inline
            />
            <DatePicker
              className='date--section__calendar'
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onChange={handleSetEndDate}
              locale='es'
              dateFormat='dd/MM/yyyy'
              inline
            />
          </section>
        </Col>
      </Row>
      <Row>
        <Col className='columns'>
          <Link className='button--link' to='/main' state={{ events: filterEventsByDates() }}>
            <Button className='button' variant='primary' size='lg' disabled={startDate === null || endDate === null}>
              Mostrar Eventos
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
