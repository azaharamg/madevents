import React from 'react';
import { Link } from 'react-router-dom';
import getData from '../service/serverData.js';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import '../stylesheet/landing.scss';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

registerLocale('es', es);

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      startDate: null,
      endDate: null
    };
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({
        events: data
      });
    });
  }

  handleSetStartDate = date => {
    this.setState({
      startDate: new Date(date).setHours(0, 0, 0, 0)
    });
  };

  handleSetEndDate = date => {
    this.setState({
      endDate: new Date(date).setHours(23, 59, 59, 999)
    });
  };

  filterEventsByDates() {
    return this.state.events.filter(event => {
      const eventDate = new Date(event.dtstart).getTime();
      return eventDate >= this.state.startDate && eventDate <= this.state.endDate;
    });
  }

  render() {
    return (
      <Container className='main text-center'>
        <Row>
          <Col>
            <section className='main--section'>
              <h1 className='main--section__title'>Elige tus fechas preferidas</h1>
              <p className='main--section__info text-justify'>
                ¡Aplicación web para consultar los eventos en Madrid, así encontrarás fácilmente nuevos eventos a los
                que asistir!
              </p>
            </section>
          </Col>
          <Col>
            <div className='rectangle'></div>
            <section className='date--section d-flex justify-content-around'>
              <DatePicker
                className='date--section__calendar'
                selected={this.state.startDate}
                selectsStart
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onChange={this.handleSetStartDate}
                minDate={new Date()}
                locale='es'
                dateFormat='dd/MM/yyyy'
                inline
              />
              <DatePicker
                className='date--section__calendar'
                selected={this.state.endDate}
                selectsEnd
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                minDate={this.state.startDate}
                onChange={this.handleSetEndDate}
                locale='es'
                dateFormat='dd/MM/yyyy'
                inline
              />
            </section>
          </Col>
        </Row>

        <Link
          className='button--link'
          to={{
            pathname: '/main',
            state: {
              events: this.filterEventsByDates()
            }
          }}
        >
          <Button
            className='button'
            variant='primary'
            size='lg'
            disabled={this.state.startDate === null || this.state.endDate === null}
          >
            Mostrar Eventos
          </Button>
        </Link>
      </Container>
    );
  }
}

export default Landing;
