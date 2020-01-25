import React from 'react';
import { Link } from 'react-router-dom';
import getData from '../service/serverData.js';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';

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
    getData().then(data => this.setState({ events: data['@graph'] }));
  }

  handleSetStartDate = date => {
    this.setState({
      startDate: date
    });
  };

  handleSetEndDate = date => {
    this.setState({
      endDate: date
    });
  };

  render() {
    return (
      <main>
        <h1>¿ Qué planes hay ?</h1>
        <DatePicker
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleSetStartDate}
          locale='es'
          dateFormat='dd/MM/yyyy'
          placeholderText='Selecciona la fecha inicial'
          minDate={new Date()}
        />
        <DatePicker
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          minDate={this.state.startDate}
          onChange={this.handleSetEndDate}
          locale='es'
          dateFormat='dd/MM/yyyy'
          placeholderText='Selecciona hasta cuando'
        />

        <Link to='/main'>
          <h2>Ver en el mapa</h2>
        </Link>
        <section>
          <h2>MadEvents</h2>
          <p>
            Es una aplicación web para consultar los eventos en Madrid y poder filtrarlos por distrito o categorías, asi
            encontrarás facilmente nuevos eventos a los que asistir !!!
          </p>
        </section>
      </main>
    );
  }
}

export default Landing;
