import React from 'react';
import { Link } from 'react-router-dom';
import getData from '../service/serverData.js';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import Logo from '../images/logo.png';

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
      <Container className='text-center'>
        <h1 className='header--title'>¿Qué planes hay?</h1>

        <main>
          <Row>
            <Col className='p-2 d-flex flex-column justify-content-center'>
              <h4>Fecha inicial</h4>
              <DatePicker
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
            </Col>

            <Col className='p-2 d-flex flex-column justify-content-center'>
              <h4>Fecha final</h4>
              <DatePicker
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
            </Col>

            <Col className='p-4 d-flex justify-content-center' md={{ span: 6, offset: 3 }}>
              <Link
                to={{
                  pathname: '/main',
                  state: {
                    events: this.filterEventsByDates()
                  }
                }}
              >
                {this.state.stardtDate === null || this.state.endDate === null ? (
                  <Button className='d-none'>Mostrar Eventos</Button>
                ) : (
                  <Button variant='primary' size='lg' active>
                    Mostrar Eventos
                  </Button>
                )}
              </Link>
            </Col>
          </Row>
          <section className='lead text-muted'>
            <p className='text-justify'>
              Aplicación web para consultar los eventos en Madrid y poder filtrarlos por distrito o categorías, asi
              encontrarás fácilmente nuevos eventos a los que asistir !!!
            </p>
          </section>
        </main>
      </Container>
    );
  }
}

export default Landing;
